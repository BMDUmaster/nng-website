<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display public blog listing page (/blog).
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $selectedCategory = $request->input('category');

        $query = Blog::where('status', 'published')
            ->where('is_active', true)
            ->latest('published_at');

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
                  ->orWhere('tags', 'like', "%{$search}%");
            });
        }

        if (!empty($selectedCategory)) {
            $query->where('category', $selectedCategory);
        }

        // Highlight featured blog if available
        $featuredBlog = (clone $query)->where('is_featured', true)->first() ?? (clone $query)->first();
        
        // Paginate remaining blogs
        $blogs = $query->paginate(9)->withQueryString();

        // Unique categories for filter menu
        $categories = Blog::where('status', 'published')
            ->where('is_active', true)
            ->whereNotNull('category')
            ->where('category', '!=', '')
            ->distinct()
            ->pluck('category');

        return view('blog.index', compact('blogs', 'featuredBlog', 'categories', 'selectedCategory', 'search'));
    }

    /**
     * Display single blog post detail page (/blog/{slug}).
     */
    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        // Increment view counter
        $blog->increment('views');

        // Related blogs
        $relatedBlogs = Blog::where('id', '!=', $blog->id)
            ->where('status', 'published')
            ->where('is_active', true)
            ->where(function ($q) use ($blog) {
                if ($blog->category) {
                    $q->where('category', $blog->category);
                }
            })
            ->latest('published_at')
            ->take(3)
            ->get();

        if ($relatedBlogs->count() < 3) {
            $extra = Blog::where('id', '!=', $blog->id)
                ->where('status', 'published')
                ->where('is_active', true)
                ->whereNotIn('id', $relatedBlogs->pluck('id'))
                ->latest('published_at')
                ->take(3 - $relatedBlogs->count())
                ->get();

            $relatedBlogs = $relatedBlogs->merge($extra);
        }

        return view('blog.show', compact('blog', 'relatedBlogs'));
    }

    /**
     * Admin: List all blogs (/admin/blogs).
     */
    public function adminIndex(Request $request)
    {
        $search = $request->input('search');
        $statusFilter = $request->input('status');

        $query = Blog::latest();

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%")
                  ->orWhere('author', 'like', "%{$search}%");
            });
        }

        if (!empty($statusFilter)) {
            $query->where('status', $statusFilter);
        }

        $blogs = $query->paginate(10)->withQueryString();

        return view('admin.blogs.index', compact('blogs', 'search', 'statusFilter'));
    }

    /**
     * Admin: Show create blog form (/admin/blogs/create).
     */
    public function create()
    {
        return view('admin.blogs.create');
    }

    /**
     * Admin: Store new blog post.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'status' => 'required|string|in:published,draft,archived',
            'published_at' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'tags' => 'nullable|string|max:255',
            'author' => 'nullable|string|max:255',
            'cover_image' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:5120',
            'excerpt' => 'nullable|string',
            'content' => 'required|string',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'focus_keyword' => 'nullable|string|max:255',
            'is_active' => 'nullable|boolean',
            'is_featured' => 'nullable|boolean',
            'faq_questions' => 'nullable|array',
            'faq_answers' => 'nullable|array',
        ]);

        $data = $request->only([
            'title', 'status', 'category', 'tags', 'author', 'excerpt', 
            'content', 'meta_description', 'meta_keywords', 'focus_keyword'
        ]);

        $data['slug'] = Blog::generateSlug($request->title);
        $data['is_active'] = $request->has('is_active') ? true : false;
        $data['is_featured'] = $request->has('is_featured') ? true : false;

        if ($request->filled('published_at')) {
            $data['published_at'] = date('Y-m-d H:i:s', strtotime($request->published_at));
        } else {
            $data['published_at'] = now();
        }

        // Handle Cover Image upload
        if ($request->hasFile('cover_image')) {
            $file = $request->file('cover_image');
            $fileName = time() . '_' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/blogs'), $fileName);
            $data['image'] = '/uploads/blogs/' . $fileName;
        }

        // Handle FAQs array
        $faqs = [];
        if ($request->has('faq_questions') && $request->has('faq_answers')) {
            $questions = $request->input('faq_questions');
            $answers = $request->input('faq_answers');
            foreach ($questions as $idx => $q) {
                if (!empty(trim($q)) && !empty(trim($answers[$idx] ?? ''))) {
                    $faqs[] = [
                        'question' => trim($q),
                        'answer' => trim($answers[$idx])
                    ];
                }
            }
        }
        $data['faqs'] = $faqs;

        Blog::create($data);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post created and published successfully!');
    }

    /**
     * Admin: Show edit blog form.
     */
    public function edit($id)
    {
        $blog = Blog::findOrFail($id);
        return view('admin.blogs.edit', compact('blog'));
    }

    /**
     * Admin: Update blog post.
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'status' => 'required|string|in:published,draft,archived',
            'published_at' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'tags' => 'nullable|string|max:255',
            'author' => 'nullable|string|max:255',
            'cover_image' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:5120',
            'excerpt' => 'nullable|string',
            'content' => 'required|string',
            'meta_description' => 'nullable|string|max:255',
            'meta_keywords' => 'nullable|string|max:255',
            'focus_keyword' => 'nullable|string|max:255',
            'is_active' => 'nullable|boolean',
            'is_featured' => 'nullable|boolean',
            'faq_questions' => 'nullable|array',
            'faq_answers' => 'nullable|array',
        ]);

        $data = $request->only([
            'title', 'status', 'category', 'tags', 'author', 'excerpt', 
            'content', 'meta_description', 'meta_keywords', 'focus_keyword'
        ]);

        if ($blog->title !== $request->title) {
            $data['slug'] = Blog::generateSlug($request->title, $blog->id);
        }

        $data['is_active'] = $request->has('is_active') ? true : false;
        $data['is_featured'] = $request->has('is_featured') ? true : false;

        if ($request->filled('published_at')) {
            $data['published_at'] = date('Y-m-d H:i:s', strtotime($request->published_at));
        }

        // Handle Cover Image upload
        if ($request->hasFile('cover_image')) {
            $file = $request->file('cover_image');
            $fileName = time() . '_' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/blogs'), $fileName);
            $data['image'] = '/uploads/blogs/' . $fileName;
        }

        // Handle FAQs array
        $faqs = [];
        if ($request->has('faq_questions') && $request->has('faq_answers')) {
            $questions = $request->input('faq_questions');
            $answers = $request->input('faq_answers');
            foreach ($questions as $idx => $q) {
                if (!empty(trim($q)) && !empty(trim($answers[$idx] ?? ''))) {
                    $faqs[] = [
                        'question' => trim($q),
                        'answer' => trim($answers[$idx])
                    ];
                }
            }
        }
        $data['faqs'] = $faqs;

        $blog->update($data);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post updated successfully!');
    }

    /**
     * Admin: Delete blog post.
     */
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog post deleted successfully.');
    }
}

@extends('blog.layout')

@php
    $filtered = !empty($search) || !empty($selectedCategory);
    $showFeatured = $featuredBlog && !$filtered && $blogs->currentPage() === 1;
    $listed = $showFeatured ? $blogs->getCollection()->where('id', '!=', $featuredBlog->id) : $blogs->getCollection();
    $pageTitle = $selectedCategory ? $selectedCategory.' | Blog' : 'Blog';
    $description = 'Articles from Narayani Garg, Psychic Spiritual Mentor, on Brainology, Numerology, Vastulogy and Astrology, and on living with more clarity.';
    $canonical = $blogs->currentPage() > 1 ? $blogs->url($blogs->currentPage()) : ($selectedCategory ? route('blog.index', ['category' => $selectedCategory]) : url('/blog'));
    // Read by blog/layout.blade.php for the title, description, canonical and share image.
    $blTitle = $pageTitle.' | Narayani Garg, Transformation with NNG';
    $blDescription = $description;
    $blCanonical = $canonical;
    $blImage = asset('/images/og-narayani-psychic-mentor.jpg');
@endphp

@section('meta')
@if ($search)
<meta name="robots" content="noindex, follow">
@endif
@endsection

@section('content')
<section class="rr-hero" aria-labelledby="page-title">
    <div class="rr-hero-inner">
        <nav class="cn-crumbs" aria-label="Breadcrumb">
            <span class="rr-crumb"><a href="{{ url('/') }}">Home</a></span>
            @if ($selectedCategory)
                <span class="rr-crumb"><span aria-hidden="true">/</span><a href="{{ route('blog.index') }}">Blog</a></span>
                <span class="rr-crumb"><span aria-hidden="true">/</span><span aria-current="page">{{ $selectedCategory }}</span></span>
            @else
                <span class="rr-crumb"><span aria-hidden="true">/</span><span aria-current="page">Blog</span></span>
            @endif
        </nav>
        <p class="cn-kicker">Read at your own pace</p>
        <h1 id="page-title">{!! $selectedCategory ? e($selectedCategory) : 'The NNG <em>blog</em>' !!}</h1>
        <p class="cn-lead">Notes from Narayani Garg on Brainology, Numerology, Vastulogy and Astrology, and on living with more clarity.</p>
        <div class="bl-tools">
            @if ($categories->count())
                <nav class="rr-topics" aria-label="Blog topics">
                    <a href="{{ route('blog.index') }}" @if (!$selectedCategory) aria-current="page" @endif>All</a>
                    @foreach ($categories as $cat)
                        <a href="{{ route('blog.index', ['category' => $cat]) }}" @if ($selectedCategory === $cat) aria-current="page" @endif>{{ $cat }}</a>
                    @endforeach
                </nav>
            @endif
            <form class="bl-search" action="{{ route('blog.index') }}" method="GET" role="search">
                <input type="search" name="search" value="{{ $search }}" placeholder="Search articles" aria-label="Search articles">
                @if ($selectedCategory)
                    <input type="hidden" name="category" value="{{ $selectedCategory }}">
                @endif
                <button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg></button>
            </form>
        </div>
    </div>
</section>

<section class="rr-sec">
    <div class="rr-inner">
        @if ($showFeatured)
            @php
                $fMinutes = max(1, (int) ceil(str_word_count(strip_tags($featuredBlog->content ?? '')) / 200));
                $fImage = $featuredBlog->image ? (Str::startsWith($featuredBlog->image, ['http://', 'https://']) ? $featuredBlog->image : asset($featuredBlog->image)) : null;
            @endphp
            <article class="rr-featured">
                <div class="rr-featured-img">
                    @if ($fImage)
                        <img class="rr-banner" src="{{ $fImage }}" alt="{{ $featuredBlog->title }}" width="1280" height="800" fetchpriority="high" decoding="async">
                    @else
                        <span class="bl-noimg" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 9c-3-2-7-3-11-2v18c4-1 8 0 11 2 3-2 7-3 11-2V7c-4-1-8 0-11 2Z"/><path d="M16 9v18"/></svg></span>
                    @endif
                    <span class="rr-chip">Latest</span>
                </div>
                <div class="rr-featured-body">
                    <p class="rr-meta">{{ $featuredBlog->category ? $featuredBlog->category.' · ' : '' }}{{ $fMinutes }} min read</p>
                    <h2>{{ $featuredBlog->title }}</h2>
                    <p>{{ $featuredBlog->excerpt ?: Str::limit(trim(strip_tags($featuredBlog->content ?? '')), 180) }}</p>
                    <a class="cn-cta" href="{{ route('blog.show', $featuredBlog->slug) }}">
                        <span>Read the article</span>
                        <span class="cn-arrow" aria-hidden="true">→</span>
                    </a>
                </div>
            </article>
        @endif

        @if ($listed->count())
            <header class="rr-head">
                <p class="cn-kicker cn-kicker-dark">{{ $search ? 'Search results' : ($showFeatured ? 'More to read' : 'Articles') }}</p>
                <h2 id="list-title">{{ $search ? 'Results for “'.$search.'”' : ($showFeatured ? 'Recent articles' : 'All articles') }}</h2>
            </header>
            <div class="rr-grid" aria-labelledby="list-title">
                @foreach ($listed as $post)
                    @include('blog._card', ['post' => $post])
                @endforeach
            </div>
        @elseif (!$showFeatured)
            <div class="bl-empty">
                <h2>{{ $filtered ? 'Nothing found' : 'Articles are on their way' }}</h2>
                <p>{{ $filtered ? 'No article matches this search. Try another word, or browse all articles.' : 'New articles from Narayani will appear here soon.' }}</p>
                @if ($filtered)
                    <a class="cn-ghost cn-ghost-dark" href="{{ route('blog.index') }}">See all articles</a>
                @endif
            </div>
        @endif

        @if ($blogs->hasPages())
            <nav class="bl-pages" aria-label="Pages">
                @if ($blogs->onFirstPage())
                    <span class="is-off" aria-hidden="true">←</span>
                @else
                    <a href="{{ $blogs->previousPageUrl() }}" rel="prev" aria-label="Previous page">←</a>
                @endif
                @foreach (range(1, $blogs->lastPage()) as $n)
                    @if ($n === $blogs->currentPage())
                        <span aria-current="page">{{ $n }}</span>
                    @else
                        <a href="{{ $blogs->url($n) }}">{{ $n }}</a>
                    @endif
                @endforeach
                @if ($blogs->hasMorePages())
                    <a href="{{ $blogs->nextPageUrl() }}" rel="next" aria-label="Next page">→</a>
                @else
                    <span class="is-off" aria-hidden="true">→</span>
                @endif
            </nav>
        @endif
    </div>
</section>
@endsection

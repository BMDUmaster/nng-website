@extends('blog.layout')

@php
    $minutes = max(1, (int) ceil(str_word_count(strip_tags($blog->content ?? '')) / 200));
    $date = $blog->published_at ?? $blog->created_at;
    $author = $blog->author ?: 'Narayani Garg';
    $image = $blog->image ? (Str::startsWith($blog->image, ['http://', 'https://']) ? $blog->image : asset($blog->image)) : null;
    $description = $blog->meta_description ?: ($blog->excerpt ?: Str::limit(trim(strip_tags($blog->content ?? '')), 155));
    $canonical = route('blog.show', $blog->slug);
    $faqs = is_array($blog->faqs) ? array_values(array_filter($blog->faqs, fn ($f) => !empty($f['question']) && !empty($f['answer']))) : [];
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'BlogPosting',
        'headline' => $blog->title,
        'description' => $description,
        'datePublished' => $date->toAtomString(),
        'dateModified' => $blog->updated_at->toAtomString(),
        'author' => ['@type' => 'Person', 'name' => $author],
        'publisher' => ['@type' => 'Organization', 'name' => 'Transformation with NNG', 'url' => url('/')],
        'mainEntityOfPage' => $canonical,
    ];
    if ($image) $schema['image'] = $image;
    // Read by blog/layout.blade.php for the title, description, canonical and share image.
    $blTitle = $blog->title.' | Narayani Garg, Transformation with NNG';
    $blDescription = $description;
    $blCanonical = $canonical;
    $blImage = $image ?? asset('/images/og-narayani-psychic-mentor.jpg');
@endphp

@section('meta')
@if ($blog->meta_keywords)
<meta name="keywords" content="{{ $blog->meta_keywords }}">
@endif
<meta property="article:published_time" content="{{ $date->toAtomString() }}">
<script type="application/ld+json">{!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!}</script>
@if (count($faqs))
<script type="application/ld+json">{!! json_encode(['@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => array_map(fn ($f) => ['@type' => 'Question', 'name' => $f['question'], 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $f['answer']]], $faqs)], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!}</script>
@endif
@endsection

@section('content')
<article class="rr-article">
    <section class="rr-hero" aria-labelledby="page-title">
        <div class="rr-hero-inner">
            <nav class="cn-crumbs" aria-label="Breadcrumb">
                <span class="rr-crumb"><a href="{{ url('/') }}">Home</a></span>
                <span class="rr-crumb"><span aria-hidden="true">/</span><a href="{{ route('blog.index') }}">Blog</a></span>
                @if ($blog->category)
                    <span class="rr-crumb"><span aria-hidden="true">/</span><a href="{{ route('blog.index', ['category' => $blog->category]) }}">{{ $blog->category }}</a></span>
                @endif
            </nav>
            <p class="cn-kicker">{{ $blog->category ? $blog->category.' · ' : '' }}{{ $minutes }} min read</p>
            <h1 id="page-title">{{ $blog->title }}</h1>
            @if ($blog->excerpt)
                <p class="cn-lead">{{ $blog->excerpt }}</p>
            @endif
            <p class="bl-byline">By <strong>{{ $author }}</strong> · <time datetime="{{ $date->toDateString() }}">{{ $date->format('d M Y') }}</time></p>
        </div>
    </section>

    <div class="rr-article-inner">
        @if ($image)
            <figure class="rr-article-figure">
                <img src="{{ $image }}" alt="{{ $blog->title }}" width="1280" height="720" fetchpriority="high" decoding="async">
            </figure>
        @endif
        <div class="rr-article-body">
            <div class="bl-content">
                {!! $blog->content !!}
            </div>

            @if (count($faqs))
                <section class="bl-faq" aria-labelledby="faq-title">
                    <h2 id="faq-title">Frequently asked questions</h2>
                    @foreach ($faqs as $faq)
                        <details>
                            <summary>{{ $faq['question'] }}</summary>
                            <p>{{ $faq['answer'] }}</p>
                        </details>
                    @endforeach
                </section>
            @endif

            <aside class="bl-author" aria-label="About the author">
                <img src="{{ asset('/images/narayani-portrait-684.webp') }}" alt="" width="64" height="64" loading="lazy">
                <div>
                    <strong>{{ $author }}</strong>
                    <span>Psychic Spiritual Mentor · Brainology, Numerology, Vastulogy and Astrology</span>
                </div>
                <a class="cn-cta" href="{{ url('/contact/') }}" data-enquiry="" data-source="blog-article" aria-haspopup="dialog">
                    <span>Enquire Now</span>
                    <span class="cn-arrow" aria-hidden="true">→</span>
                </a>
            </aside>
        </div>
    </div>

    @if (isset($relatedBlogs) && $relatedBlogs->count())
        <section class="rr-sec rr-next" aria-labelledby="next-title">
            <div class="rr-inner">
                <header class="rr-head">
                    <p class="cn-kicker cn-kicker-dark">Keep reading</p>
                    <h2 id="next-title">More from the blog</h2>
                </header>
                <div class="rr-grid">
                    @foreach ($relatedBlogs as $post)
                        @include('blog._card', ['post' => $post])
                    @endforeach
                </div>
                <div class="rr-back">
                    <a class="cn-ghost cn-ghost-dark" href="{{ route('blog.index') }}">← All articles</a>
                </div>
            </div>
        </section>
    @endif
</article>
@endsection

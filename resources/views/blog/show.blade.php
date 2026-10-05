<!DOCTYPE html>
<html lang="en">
<head>
    <script>(function(){document.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&a.href){var raw=a.getAttribute('href')||a.href;if(raw.indexOf('mailto:')===0||a.href.indexOf('mailto:')===0){e.preventDefault();e.stopPropagation();var mc=raw.replace(/^mailto:/,''),parts=mc.split('?'),email=decodeURIComponent(parts[0]),su='',body='';if(parts.length>1){var p=new URLSearchParams(parts[1]);su=p.get('subject')||'';body=p.get('body')||'';}var gUrl='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(email);if(su)gUrl+='&su='+encodeURIComponent(su);if(body)gUrl+='&body='+encodeURIComponent(body);window.open(gUrl,'_blank');return;}if(a.origin===window.location.origin){var href=a.getAttribute('href');if(href&&!href.startsWith('#')&&!href.startsWith('javascript:')&&!a.hasAttribute('data-enquiry')&&a.target!=='_blank'){e.stopPropagation();}}}},true);})();</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $blog->title }} - Transformation with NNG</title>
    <meta name="description" content="{{ $blog->meta_description ?? $blog->excerpt ?? Str::limit(strip_tags($blog->content), 150) }}">
    @if($blog->meta_keywords)
        <meta name="keywords" content="{{ $blog->meta_keywords }}">
    @endif
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/blog/' . $blog->slug) }}">

    <!-- Open Graph -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="{{ $blog->title }}">
    <meta property="og:description" content="{{ $blog->meta_description ?? $blog->excerpt }}">
    <meta property="og:image" content="{{ asset($blog->image ?? '/images/narayani-portrait-684.webp') }}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg-body: #FAF8F5;
            --surface-card: #FFFFFF;
            --gold-gradient: linear-gradient(135deg, #B8860B 0%, #C9A04E 50%, #8A6405 100%);
            --gold-main: #B8860B;
            --gold-deep: #3C183D;
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-subtle: #E2E8F0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-body);
            color: var(--text-body);
            line-height: 1.8;
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            color: var(--text-heading);
            line-height: 1.35;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Header Navbar */
        .site-header {
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-subtle);
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 16px 0;
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .brand img {
            height: 42px;
            width: auto;
        }

        .brand-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            color: var(--gold-deep);
        }

        .back-link {
            color: var(--gold-main);
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
        }

        .back-link:hover {
            text-decoration: underline;
        }

        /* Article Header */
        .article-header {
            padding: 40px 0 20px;
            text-align: center;
        }

        .article-category {
            display: inline-block;
            background: rgba(184, 134, 11, 0.12);
            color: var(--gold-main);
            font-size: 12px;
            font-weight: 700;
            padding: 6px 16px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 16px;
        }

        .article-title {
            font-size: 38px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .article-meta {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            font-size: 14px;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 24px;
        }

        .article-cover {
            width: 100%;
            max-height: 480px;
            object-fit: cover;
            border-radius: 20px;
            margin: 30px 0 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        /* Article Content */
        .article-body {
            background-color: var(--surface-card);
            border-radius: 20px;
            border: 1px solid var(--border-subtle);
            padding: 48px;
            margin-bottom: 50px;
            font-size: 16.5px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .article-body p {
            margin-bottom: 20px;
        }

        .article-body h2 {
            font-size: 26px;
            margin: 36px 0 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid rgba(184, 134, 11, 0.15);
        }

        .article-body h3 {
            font-size: 21px;
            margin: 28px 0 14px;
        }

        .article-body ul, .article-body ol {
            margin-left: 24px;
            margin-bottom: 20px;
        }

        .article-body li {
            margin-bottom: 8px;
        }

        /* FAQ Section */
        .faq-box {
            background: #F8FAFC;
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            padding: 30px;
            margin-top: 40px;
        }

        .faq-box h3 {
            font-size: 22px;
            margin-bottom: 20px;
            color: var(--text-heading);
        }

        .faq-item {
            border-bottom: 1px solid var(--border-subtle);
            padding: 16px 0;
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-q {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-heading);
            margin-bottom: 8px;
        }

        .faq-a {
            font-size: 15px;
            color: var(--text-body);
        }

        /* Author Card */
        .author-card {
            background-color: #FFFFFF;
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            padding: 28px;
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 60px;
        }

        .author-img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--gold-main);
        }

        .author-info h4 {
            font-size: 17px;
            margin-bottom: 4px;
        }

        .author-info p {
            font-size: 13.5px;
            color: var(--text-muted);
        }

        /* Related Blogs */
        .related-title {
            font-size: 28px;
            margin-bottom: 24px;
            text-align: center;
        }

        .related-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 80px;
        }

        @media (max-width: 768px) {
            .related-grid {
                grid-template-columns: 1fr;
            }

            .article-title {
                font-size: 28px;
            }

            .article-body {
                padding: 24px;
            }
        }

        .related-card {
            background: #FFFFFF;
            border-radius: 14px;
            border: 1px solid var(--border-subtle);
            overflow: hidden;
            text-decoration: none;
            color: inherit;
        }

        .related-card img {
            width: 100%;
            height: 140px;
            object-fit: cover;
        }

        .related-card-body {
            padding: 16px;
        }

        .related-card-title {
            font-size: 15px;
            font-weight: 700;
            line-height: 1.35;
        }

        /* Footer */
        .site-footer {
            background-color: #1E1B2E;
            color: #FFFFFF;
            padding: 36px 0;
            text-align: center;
            font-size: 13.5px;
        }

        .site-footer a {
            color: #C9A04E;
            text-decoration: none;
            margin: 0 10px;
        }
    </style>
</head>
<body>

    <!-- Header Navbar -->
    <header class="site-header">
        <div class="container header-inner" style="max-width: 1100px;">
            <a href="{{ url('/') }}" class="brand">
                <img src="/images/nng-logo-400.webp" alt="Transformation with NNG">
                <span class="brand-title">Transformation with NNG</span>
            </a>

            <a href="{{ url('/blog') }}" class="back-link">← Back to All Blogs</a>
        </div>
    </header>

    <main class="container">
        <!-- Article Header -->
        <article class="article-header">
            @if($blog->category)
                <span class="article-category">{{ $blog->category }}</span>
            @endif
            <h1 class="article-title">{{ $blog->title }}</h1>
            <div class="article-meta">
                <span>By <strong>{{ $blog->author ?? 'Dr. Narayani Garg' }}</strong></span>
                <span>&bull;</span>
                <span>📅 {{ $blog->published_at ? $blog->published_at->format('d M Y') : $blog->created_at->format('d M Y') }}</span>
                <span>&bull;</span>
                <span>👁️ {{ $blog->views }} views</span>
            </div>
        </article>

        <!-- Cover Image -->
        @if($blog->image)
            <img src="{{ asset($blog->image) }}" alt="{{ $blog->title }}" class="article-cover">
        @endif

        <!-- Article Body -->
        <div class="article-body">
            @if($blog->excerpt)
                <div style="font-size: 18px; font-weight: 500; color: var(--gold-deep); background: #FAF5ED; padding: 20px; border-left: 4px solid var(--gold-main); border-radius: 8px; margin-bottom: 30px;">
                    {{ $blog->excerpt }}
                </div>
            @endif

            {!! $blog->content !!}

            <!-- Optional FAQs Accordion -->
            @if(!empty($blog->faqs) && is_array($blog->faqs) && count($blog->faqs) > 0)
                <div class="faq-box">
                    <h3>Frequently Asked Questions</h3>
                    @foreach($blog->faqs as $faq)
                        <div class="faq-item">
                            <div class="faq-q">Q: {{ $faq['question'] ?? '' }}</div>
                            <div class="faq-a">{{ $faq['answer'] ?? '' }}</div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>

        <!-- Author Bio Card -->
        <div class="author-card">
            <img src="/images/narayani-cover-portrait-480.webp" alt="Dr. Narayani Garg" class="author-img">
            <div class="author-info">
                <h4>Written by {{ $blog->author ?? 'Dr. Narayani Garg' }}</h4>
                <p>Life Strategist & Spiritual Mentor combining Subconscious Mind Rewiring, Sacred Numerology, Vastu Shastra, and Vedic Astrology.</p>
            </div>
        </div>

        <!-- Related Blogs -->
        @if(isset($relatedBlogs) && count($relatedBlogs) > 0)
            <h2 class="related-title">Related Articles</h2>
            <div class="related-grid">
                @foreach($relatedBlogs as $rel)
                    <a href="{{ route('blog.show', $rel->slug) }}" class="related-card">
                        <img src="{{ $rel->image ? $rel->image : '/images/narayani-portrait-684.webp' }}" alt="{{ $rel->title }}">
                        <div class="related-card-body">
                            <div class="related-card-title">{{ $rel->title }}</div>
                        </div>
                    </a>
                @endforeach
            </div>
        @endif
    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="container" style="max-width: 1100px;">
            <p>© 2026 Transformation with NNG by Dr. Narayani Garg. All Rights Reserved.</p>
            <div style="margin-top: 10px;">
                <a href="{{ url('/') }}">Home</a> |
                <a href="{{ url('/blog') }}">Blog</a> |
                <a href="{{ url('/privacy-policy') }}">Privacy Policy</a> |
                <a href="{{ url('/terms-conditions') }}">Terms & Conditions</a>
            </div>
        </div>
    </footer>

</body>
</html>

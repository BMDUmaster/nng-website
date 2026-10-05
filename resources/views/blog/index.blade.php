<!DOCTYPE html>
<html lang="en">
<head>
    <script>(function(){document.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&a.href){var raw=a.getAttribute('href')||a.href;if(raw.indexOf('mailto:')===0||a.href.indexOf('mailto:')===0){e.preventDefault();e.stopPropagation();var mc=raw.replace(/^mailto:/,''),parts=mc.split('?'),email=decodeURIComponent(parts[0]),su='',body='';if(parts.length>1){var p=new URLSearchParams(parts[1]);su=p.get('subject')||'';body=p.get('body')||'';}var gUrl='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(email);if(su)gUrl+='&su='+encodeURIComponent(su);if(body)gUrl+='&body='+encodeURIComponent(body);window.open(gUrl,'_blank');return;}if(a.origin===window.location.origin){var href=a.getAttribute('href');if(href&&!href.startsWith('#')&&!href.startsWith('javascript:')&&!a.hasAttribute('data-enquiry')&&a.target!=='_blank'){e.stopPropagation();}}}},true);})();</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Transformation with NNG by Dr. Narayani Garg</title>
    <meta name="description" content="Explore insights, articles, and guidance on Mind Training, Sacred Numerology, Vastu Shastra, and Vedic Astrology by Dr. Narayani Garg.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/blog') }}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg-body: #F8FAFC;
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
            line-height: 1.6;
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            color: var(--text-heading);
        }

        .container {
            max-width: 1200px;
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

        .desktop-nav {
            display: flex;
            align-items: center;
            gap: 28px;
        }

        .desktop-nav a {
            color: var(--text-body);
            text-decoration: none;
            font-weight: 600;
            font-size: 14.5px;
            transition: color 0.2s ease;
        }

        .desktop-nav a:hover, .desktop-nav a.active {
            color: var(--gold-main);
        }

        /* Hero Banner matching Uploaded Image 1 */
        .blog-hero {
            position: relative;
            background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/images/narayani-cover-portrait-480.webp') center/cover no-repeat;
            padding: 90px 0;
            text-align: center;
            color: #FFFFFF;
        }

        .blog-hero-title {
            font-size: 48px;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 8px;
        }

        .blog-breadcrumb {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
        }

        .blog-breadcrumb a {
            color: #FFFFFF;
            text-decoration: none;
        }

        /* Filter Menu */
        .blog-filter-bar {
            padding: 30px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
        }

        .category-pills {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .category-pill {
            display: inline-block;
            padding: 8px 18px;
            background: #FFFFFF;
            border: 1px solid var(--border-subtle);
            border-radius: 30px;
            font-size: 13.5px;
            font-weight: 600;
            color: var(--text-body);
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .category-pill:hover, .category-pill.active {
            background: var(--gold-deep);
            color: #FFFFFF;
            border-color: var(--gold-deep);
            box-shadow: 0 4px 12px rgba(60, 24, 61, 0.2);
        }

        .search-box {
            position: relative;
            min-width: 260px;
        }

        .search-box input {
            width: 100%;
            padding: 10px 16px 10px 38px;
            border-radius: 30px;
            border: 1px solid var(--border-subtle);
            background: #FFFFFF;
            font-size: 13.5px;
            outline: none;
        }

        .search-box svg {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            stroke: var(--text-muted);
        }

        /* Blog Grid Layout matching Uploaded Image 1 */
        .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            margin-bottom: 70px;
        }

        @media (max-width: 992px) {
            .blog-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 640px) {
            .blog-grid {
                grid-template-columns: 1fr;
            }
        }

        .blog-card {
            background-color: var(--surface-card);
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            text-decoration: none;
            color: inherit;
        }

        .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .blog-card-img-wrap {
            position: relative;
            height: 220px;
            overflow: hidden;
            background-color: #E2E8F0;
        }

        .blog-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }

        .blog-card:hover .blog-card-img {
            transform: scale(1.05);
        }

        .blog-card-category {
            position: absolute;
            top: 14px;
            left: 14px;
            background: rgba(30, 27, 46, 0.85);
            backdrop-filter: blur(4px);
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .blog-card-body {
            padding: 24px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .blog-card-date {
            font-size: 13px;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 10px;
        }

        .blog-card-title {
            font-size: 19px;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: 12px;
            color: var(--text-heading);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .blog-card-excerpt {
            font-size: 14px;
            color: var(--text-body);
            line-height: 1.6;
            margin-bottom: 18px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .blog-card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 13px;
            font-weight: 600;
            color: var(--gold-main);
            border-top: 1px solid #F1F5F9;
            padding-top: 14px;
            margin-top: auto;
        }

        /* Footer */
        .site-footer {
            background-color: #1E1B2E;
            color: #FFFFFF;
            padding: 40px 0;
            text-align: center;
        }

        .site-footer p {
            font-size: 13.5px;
            color: rgba(255,255,255,0.7);
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
        <div class="container header-inner">
            <a href="{{ url('/') }}" class="brand">
                <img src="/images/nng-logo-400.webp" alt="Transformation with NNG">
                <span class="brand-title">Transformation with NNG</span>
            </a>

            <nav class="desktop-nav">
                <a href="{{ url('/') }}">Home</a>
                <a href="{{ url('/services') }}">Services</a>
                <a href="{{ url('/hand-holding-program') }}">Hand Holding Program</a>
                <a href="{{ url('/about') }}">About</a>
                <a href="{{ url('/blog') }}" class="active">Blog</a>
                <a href="{{ url('/contact') }}">Contact</a>
            </nav>
        </div>
    </header>

    <!-- Hero Banner (Image 1 replica) -->
    <section class="blog-hero">
        <div class="container">
            <h1 class="blog-hero-title">Blog</h1>
            <div class="blog-breadcrumb">
                <a href="{{ url('/') }}">Home</a> / <span>Blog</span>
            </div>
        </div>
    </section>

    <!-- Main Content Container -->
    <main class="container">
        
        <!-- Filter & Search Bar -->
        <div class="blog-filter-bar">
            <div class="category-pills">
                <a href="{{ route('blog.index') }}" class="category-pill {{ empty($selectedCategory) ? 'active' : '' }}">All Articles</a>
                @foreach($categories as $cat)
                    <a href="{{ route('blog.index', ['category' => $cat]) }}" class="category-pill {{ $selectedCategory == $cat ? 'active' : '' }}">{{ $cat }}</a>
                @endforeach
            </div>

            <form action="{{ route('blog.index') }}" method="GET" class="search-box">
                <svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" name="search" value="{{ $search ?? '' }}" placeholder="Search articles...">
            </form>
        </div>

        <!-- Blog Cards Grid -->
        <div class="blog-grid">
            @forelse($blogs as $blog)
                <a href="{{ route('blog.show', $blog->slug) }}" class="blog-card">
                    <div class="blog-card-img-wrap">
                        <img src="{{ $blog->image ? $blog->image : '/images/narayani-portrait-684.webp' }}" alt="{{ $blog->title }}" class="blog-card-img" loading="lazy">
                        @if($blog->category)
                            <span class="blog-card-category">{{ $blog->category }}</span>
                        @endif
                    </div>
                    <div class="blog-card-body">
                        <div>
                            <div class="blog-card-date">
                                📅 {{ $blog->published_at ? $blog->published_at->format('d M Y') : $blog->created_at->format('d M Y') }}
                                @if($blog->views > 0)
                                    &bull; 👁️ {{ $blog->views }} views
                                @endif
                            </div>
                            <h3 class="blog-card-title">{{ $blog->title }}</h3>
                            <p class="blog-card-excerpt">{{ $blog->excerpt ?? Str::limit(strip_tags($blog->content), 130) }}</p>
                        </div>
                        <div class="blog-card-footer">
                            <span>Read Full Article</span>
                            <span>→</span>
                        </div>
                    </div>
                </a>
            @empty
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 16px; border: 1px solid var(--border-subtle);">
                    <h3 style="font-size: 20px; margin-bottom: 8px;">No blog articles found</h3>
                    <p style="color: var(--text-muted);">Try searching with different keywords or selecting another category.</p>
                </div>
            @endforelse
        </div>

        <!-- Pagination Links -->
        @if($blogs->hasPages())
            <div style="margin-bottom: 70px; display: flex; justify-content: center;">
                {{ $blogs->links() }}
            </div>
        @endif

    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="container">
            <p>© 2026 Transformation with NNG by Dr. Narayani Garg. All Rights Reserved.</p>
            <div style="margin-top: 12px;">
                <a href="{{ url('/') }}">Home</a> |
                <a href="{{ url('/blog') }}">Blog</a> |
                <a href="{{ url('/privacy-policy') }}">Privacy Policy</a> |
                <a href="{{ url('/terms-conditions') }}">Terms & Conditions</a>
            </div>
        </div>
    </footer>

</body>
</html>

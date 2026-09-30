<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transformation with NNG - Life Strategy & Subconscious Alignment by Narayani Garg</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Discover Transformation with NNG by Narayani Garg — combining Mind Rewiring, Sacred Numerology, Vastu Shastra, and Vedic Astrology for deep personal and professional alignment.">
    <meta name="keywords" content="Transformation with NNG, Narayani Garg, Life Strategist, Mind Training, Sacred Numerology, Vastu Shastra, Vedic Astrology, Subconscious Alignment">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/nng') }}">

    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Transformation with NNG - Life Strategy by Narayani Garg">
    <meta property="og:description" content="Integrative mind alignment, numerology, vastu, and astrology for personal transformation.">
    <meta property="og:url" content="{{ url('/nng') }}">
    <meta property="og:image" content="{{ asset('/images/narayani-portrait-684.webp') }}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Schema.org JSON-LD for SEO -->
    @verbatim
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Transformation with NNG",
      "url": "http://127.0.0.1:8000/nng",
      "logo": "http://127.0.0.1:8000/images/nng-logo-400.webp",
      "founder": {
        "@type": "Person",
        "name": "Narayani Garg",
        "jobTitle": "The Life Strategist"
      },
      "description": "Life strategy practice combining Mind Training, Sacred Numerology, Vastu Shastra, and Vedic Astrology for alignment in career, health, relationships, and finance.",
      "areaServed": ["India", "Global"],
      "sameAs": [
        "https://www.youtube.com/@transformationwithnng",
        "https://www.instagram.com/transformationwithnng/"
      ]
    }
    </script>
    @endverbatim

    <style>
        :root {
            --bg-light: #FAF8F5;
            --surface-bg: #FFFFFF;
            --surface-card: #FFFFFF;
            --gold-light: #C9A04E;
            --gold-main: #B8860B;
            --gold-deep: #8A6405;
            --gold-gradient: linear-gradient(135deg, #B8860B 0%, #C9A04E 50%, #8A6405 100%);
            --text-heading: #1E1B2E;
            --text-body: #4A4556;
            --text-muted: #6E687A;
            --border-glow: rgba(184, 134, 11, 0.22);
            --border-subtle: rgba(0, 0, 0, 0.08);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-body);
            line-height: 1.7;
            overflow-x: hidden;
        }

        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            color: var(--text-heading);
            line-height: 1.3;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* SEO Header / Navbar */
        .header {
            background-color: rgba(255, 255, 255, 0.92);
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

        .logo-wrap {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .logo-img {
            height: 44px;
            width: auto;
        }

        .logo-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 28px;
            list-style: none;
        }

        .nav-links a {
            color: var(--text-body);
            text-decoration: none;
            font-size: 14.5px;
            font-weight: 500;
            transition: color 0.25s ease;
        }

        .nav-links a:hover {
            color: var(--gold-main);
        }

        /* Hero Section */
        .hero {
            padding: 90px 0 70px;
            position: relative;
            background-image: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
            text-align: center;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(212, 175, 55, 0.1);
            border: 1px solid var(--border-glow);
            color: var(--gold-main);
            padding: 6px 18px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 24px;
        }

        .hero-title {
            font-size: 48px;
            font-weight: 700;
            max-width: 860px;
            margin: 0 auto 20px;
            letter-spacing: -0.5px;
        }

        .hero-title span {
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
            font-size: 18px;
            color: var(--text-body);
            max-width: 720px;
            margin: 0 auto 36px;
            font-weight: 400;
        }

        .hero-meta-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid var(--border-subtle);
            flex-wrap: wrap;
        }

        .meta-item {
            text-align: center;
        }

        .meta-val {
            font-size: 28px;
            font-weight: 700;
            color: var(--gold-light);
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .meta-lbl {
            font-size: 12.5px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 2px;
        }

        /* Pillars Section */
        .pillars-section {
            padding: 80px 0;
            background: var(--surface-bg);
            border-top: 1px solid var(--border-subtle);
            border-bottom: 1px solid var(--border-subtle);
        }

        .section-header {
            text-align: center;
            margin-bottom: 56px;
        }

        .section-subtitle {
            color: var(--gold-main);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .section-title {
            font-size: 36px;
            color: var(--text-heading);
        }

        .grid-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 28px;
        }

        .pillar-card {
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: 18px;
            padding: 36px 30px;
            transition: all 0.3s ease;
        }

        .pillar-card:hover {
            border-color: var(--border-glow);
            transform: translateY(-4px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.06);
        }

        .pillar-num {
            font-size: 36px;
            font-family: 'Playfair Display', serif;
            color: var(--gold-main);
            opacity: 0.9;
            margin-bottom: 16px;
        }

        .pillar-card h3 {
            font-size: 22px;
            margin-bottom: 12px;
            color: var(--text-heading);
        }

        .pillar-card p {
            font-size: 14.5px;
            color: var(--text-body);
        }

        /* SEO Detailed Content Article Section */
        .seo-content-section {
            padding: 90px 0;
        }

        .seo-article {
            max-width: 840px;
            margin: 0 auto;
        }

        .seo-article h2 {
            font-size: 32px;
            margin: 40px 0 18px;
            color: var(--text-heading);
        }

        .seo-article h2:first-of-type {
            margin-top: 0;
        }

        .seo-article p {
            font-size: 16px;
            color: var(--text-body);
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .seo-article blockquote {
            border-left: 3px solid var(--gold-main);
            padding: 16px 24px;
            margin: 30px 0;
            background: rgba(212, 175, 55, 0.05);
            border-radius: 0 12px 12px 0;
            font-family: 'Playfair Display', serif;
            font-size: 19px;
            font-style: italic;
            color: var(--text-heading);
        }

        /* FAQ Section for SEO */
        .faq-section {
            padding: 80px 0;
            background: var(--surface-bg);
            border-top: 1px solid var(--border-subtle);
        }

        .faq-grid {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .faq-item {
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            padding: 24px;
        }

        .faq-item h3 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-heading);
            margin-bottom: 8px;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .faq-item p {
            font-size: 14.5px;
            color: var(--text-muted);
        }

        /* Footer */
        .footer {
            padding: 50px 0;
            border-top: 1px solid var(--border-subtle);
            text-align: center;
            font-size: 13.5px;
            color: var(--text-muted);
        }

        .footer-nav {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin-bottom: 20px;
        }

        .footer-nav a {
            color: var(--text-body);
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .footer-nav a:hover {
            color: var(--gold-main);
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 34px; }
            .hero-subtitle { font-size: 16px; }
            .hero-meta-bar { gap: 20px; }
            .nav-links { display: none; }
        }
    </style>
</head>
<body>

    <!-- Header / Branding Navigation -->
    <header class="header">
        <div class="container header-inner">
            <a href="{{ url('/') }}" class="logo-wrap">
                <img src="/images/nng-logo-400.webp" alt="NNG Logo" class="logo-img" onerror="this.style.display='none'">
                <span class="logo-title">Transformation with NNG</span>
            </a>

            <nav>
                <ul class="nav-links">
                    <li><a href="{{ url('/') }}">Home</a></li>
                    <li><a href="{{ url('/services') }}">Services</a></li>
                    <li><a href="{{ url('/hand-holding-program') }}">Program</a></li>
                    <li><a href="{{ url('/about') }}">About Narayani</a></li>
                    <li><a href="{{ url('/consultation') }}">Consultation</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <div class="hero-badge">Official SEO Knowledge Hub</div>
                <h1 class="hero-title">Mind. Direction. Alignment. <span>Transformation with NNG</span></h1>
                <p class="hero-subtitle">An integrative life strategy framework by Narayani Garg, combining Subconscious Mind Rewiring, Sacred Numerology, Vastu Shastra, and Vedic Astrology.</p>

                <div class="hero-meta-bar">
                    <div class="meta-item">
                        <div class="meta-val">15+ Years</div>
                        <div class="meta-lbl">Professional Experience</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-val">10,000+</div>
                        <div class="meta-lbl">Clients Guided Globally</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-val">4 Ancient Disciplines</div>
                        <div class="meta-lbl">Unified Strategic Method</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Triad Pillars Section -->
        <section class="pillars-section">
            <div class="container">
                <div class="section-header">
                    <div class="section-subtitle">Core Strategic Framework</div>
                    <h2 class="section-title">The Three Pillars of Transformation</h2>
                </div>

                <div class="grid-3">
                    <article class="pillar-card">
                        <div class="pillar-num">01</div>
                        <h3>Subconscious Mind</h3>
                        <p>Identify repeating internal thought loops, subconscious blockages, and habit patterns. Real transformation begins when the mind becomes receptive and quieted.</p>
                    </article>

                    <article class="pillar-card">
                        <div class="pillar-num">02</div>
                        <h3>Strategic Direction</h3>
                        <p>Decode your life purpose, career cycles, and timing through Sacred Numerology and Vedic Astrology chart analysis to make grounded, confident decisions.</p>
                    </article>

                    <article class="pillar-card">
                        <div class="pillar-num">03</div>
                        <h3>Spatial Alignment</h3>
                        <p>Harmonize your living, workspace, and daily environmental energies through Vastu Shastra to support focus, health, prosperity, and peace of mind.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- SEO Article & Methodology Deep-Dive -->
        <section class="seo-content-section">
            <div class="container">
                <article class="seo-article">
                    <h2>Understanding the NNG Transformation Approach</h2>
                    <p>Many traditional remedial systems offer external quick-fixes without addressing internal mental readiness. At <strong>Transformation with NNG</strong>, founder <em>Narayani Garg</em> (MBA & practitioner of Vedic sciences) emphasizes that remedies are effective only when the mind is aligned and receptive.</p>

                    <blockquote>
                        “Upay tab kaam karta hai jab dimaag kaam karta hai — Remedies work when the mind is active, clear, and prepared for change.”
                    </blockquote>

                    <h2>Four Key Pillars of Practice</h2>

                    <p><strong>1. Mind Rewiring & Emotional Mastery:</strong> Practical neural rewiring tools including breathwork, Ho'oponopono, Emotional Freedom Technique (EFT) tapping, and structured affirmations to dissolve anxiety and past conditioning.</p>

                    <p><strong>2. Sacred Numerology:</strong> Analyzing birth date vibrations, name spellings, and daily numbers (such as mobile numbers) to reveal hidden potentials and seasonal timings.</p>

                    <p><strong>3. Vastu Shastra:</strong> Optimizing spatial energy flow in residential homes, offices, and commercial establishments without unnecessary structural destruction.</p>

                    <p><strong>4. Vedic Astrology (Jyotish):</strong> Deep natal chart interpretations focused on major life transitions, career clarity, marriage compatibility, and business decisions.</p>

                    <h2>Who Benefits from Transformation with NNG?</h2>
                    <p>This practice serves individuals, entrepreneurs, and families seeking clarity during major life decisions, repeating relationship patterns, career stagnation, or personal realignment across India and worldwide.</p>
                </article>
            </div>
        </section>

        <!-- Search Engine SEO FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="section-header">
                    <div class="section-subtitle">Search Engine Insights</div>
                    <h2 class="section-title">Frequently Asked Questions</h2>
                </div>

                <div class="faq-grid">
                    <div class="faq-item">
                        <h3>What is Transformation with NNG?</h3>
                        <p>Transformation with NNG is a holistic guidance methodology founded by Narayani Garg that synthesizes mind training, numerology, vastu shastra, and astrology into a practical life strategy.</p>
                    </div>

                    <div class="faq-item">
                        <h3>How does Narayani Garg combine Mind Training with Astrology & Vastu?</h3>
                        <p>Rather than relying purely on external rituals, Narayani works first on subconscious habits and clarity so that astrological timings and vastu changes create tangible, lasting results.</p>
                    </div>

                    <div class="faq-item">
                        <h3>Are online consultations available outside India?</h3>
                        <p>Yes, consultations are conducted globally online for clients across North America, Europe, UAE, Asia Pacific, and worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- SEO Footer -->
    <footer class="footer">
        <div class="container">
            <nav class="footer-nav">
                <a href="{{ url('/') }}">Home</a>
                <a href="{{ url('/services') }}">Services</a>
                <a href="{{ url('/hand-holding-program') }}">Hand Holding Program</a>
                <a href="{{ url('/about') }}">About Narayani</a>
                <a href="{{ url('/consultation') }}">Consultation</a>
                <a href="{{ url('/nng') }}">SEO Landing Page</a>
                <a href="{{ url('/admin/login') }}">Admin Login</a>
            </nav>
            <p>© 2026 Transformation with NNG. All Rights Reserved. Designed for Search Engine Optimization.</p>
        </div>
    </footer>

</body>
</html>

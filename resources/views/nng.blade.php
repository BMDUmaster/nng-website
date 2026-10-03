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
    
      .faq-wrap, .faq-wrap.has-backdrop, section.faq-wrap, #faq, .faq, .ads-faq, .faq-intro {
        padding-top: 48px !important;
      }
    

  .faq-wrap, .faq-wrap.has-backdrop, section.faq-wrap, #faq, .faq, .ads-faq {
    padding-top: 16px !important;
    padding-bottom: 24px !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .faq-intro {
    padding-top: 10px !important;
    margin-bottom: 16px !important;
  }


  /* Pretty UI for IN THEIR OWN WORDS section */
  #testimonials {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .testimonial-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 24px !important;
    margin-top: 30px !important;
  }
  .testimonial {
    background: linear-gradient(145deg, #ffffff 0%, #fdfbf7 100%) !important;
    border: 1px solid rgba(212, 175, 55, 0.35) !important;
    border-radius: 20px !important;
    padding: 24px !important;
    box-shadow: 0 10px 25px rgba(60, 24, 61, 0.05) !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    transition: all 0.3s ease !important;
    position: relative !important;
    overflow: hidden !important;
  }
  .testimonial:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 16px 35px rgba(60, 24, 61, 0.12) !important;
    border-color: rgba(212, 175, 55, 0.6) !important;
  }
  .testimonial-tag {
    display: inline-block !important;
    background: rgba(184, 134, 11, 0.1) !important;
    color: #8b6b14 !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    padding: 5px 12px !important;
    border-radius: 20px !important;
    align-self: flex-start !important;
    margin-bottom: 14px !important;
  }
  .testimonial blockquote {
    margin: 0 0 16px 0 !important;
    padding: 0 !important;
  }
  .testimonial blockquote p {
    font-family: var(--font-serif, Georgia, serif) !important;
    font-size: 15px !important;
    line-height: 1.65 !important;
    color: #2d152e !important;
    font-style: italic !important;
  }
  .testimonial .client {
    margin-bottom: 16px !important;
    padding-top: 10px !important;
    border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
  }
  .testimonial .client div {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #3c183d !important;
  }
  .testimonial .client small {
    display: block !important;
    font-size: 12px !important;
    color: #7a6b7b !important;
    font-weight: 400 !important;
    margin-top: 2px !important;
  }
  .voice-preview {
    border-radius: 14px !important;
    overflow: hidden !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    transition: transform 0.3s ease !important;
  }
  .voice-preview:hover {
    transform: scale(1.02) !important;
  }


  
  
    font-size: 15px !important;
    line-height: 1.65 !important;
    color: #523c53 !important;
    margin-bottom: 14px !important;
  }
  
  
  
  
  /* Hide desktop extra content on mobile devices */
  @media (max-width: 768px) {
    
  }

</style>
<style id="mobile-responsive-overrides">

/* MOBILE SPECIFIC UI FIXES (AS REQUESTED) */
@media (max-width: 768px) {
  /* 1. Hide Resume button next to "Take your time with their stories" (Image 1) */
  .quote-auto-control button {
    display: none !important;
  }

  /* 2. Hide "In their own words" pagination & arrow controls (Image 2) */
  #testimonials .track-controls,
  .track-controls {
    display: none !important;
  }

  /* 3. Hide Resume motion / Pause motion & Orbit control buttons on Mobile (Image 3) */
  .story-rail-controls button,
  .orbit-control,
  .chakra-control-btn,
  button[aria-pressed],
  button[aria-label*="Pause"],
  button[aria-label*="Resume"],
  button[title*="Pause"],
  button[title*="Resume"] {
    display: none !important;
  }

  /* 5. Reduce vertical space/gap in 6 Months Personal Guidance Card on Mobile (Image 5) */
  .program-details {
    padding: 16px 14px !important;
    margin-top: 14px !important;
    gap: 12px !important;
  }
  .program-details ul {
    margin-top: 8px !important;
    margin-bottom: 10px !important;
    padding-left: 16px !important;
  }
  .program-details li {
    margin-bottom: 6px !important;
    padding-bottom: 6px !important;
    font-size: 13.5px !important;
    line-height: 1.35 !important;
  }
  .program-domains {
    margin-top: 12px !important;
    gap: 8px !important;
  }
  .program-domains span {
    padding: 6px 14px !important;
    font-size: 12.5px !important;
  }
  .program-duration {
    margin-bottom: 8px !important;
  }
}

/* 4. Remove extra right arrow from "Visit her Instagram" button (Image 4) */
.social-profile-link::after,
a.social-profile-link::after {
  content: "" !important;
  display: none !important;
}

/* DESKTOP SCREEN ONLY (min-width: 769px) */
@media (min-width: 769px) {
  .section-wrap, .container, .program-panel, .header-inner, .site-header .header-inner, main, footer {
    max-width: 100% !important;
    width: 100% !important;
    padding-left: clamp(20px, 4vw, 60px) !important;
    padding-right: clamp(20px, 4vw, 60px) !important;
    box-sizing: border-box !important;
  }

  .hero-proof {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 20px !important;
    width: 100% !important;
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .hero-proof > span {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    background: #faf4e8 !important;
    border: 1px solid #e2c992 !important;
    border-radius: 50px !important;
    padding: 10px 20px !important;
    font-size: 13.5px !important;
    color: #444444 !important;
    box-shadow: 0 2px 10px rgba(186, 133, 31, 0.08) !important;
    white-space: nowrap !important;
  }

  .hero-proof > span strong {
    font-size: 16.5px !important;
    font-weight: 800 !important;
    color: #7a5410 !important;
  }

  .founder-film {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 360px) !important;
    gap: clamp(32px, 5vw, 64px) !important;
    align-items: center !important;
  }

  .founder-film-copy {
    max-width: 100% !important;
  }

  .founder-film-pillars {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 16px !important;
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .film-pillar-card {
    background: #faf4e8 !important;
    border: 1px solid #e5d3b0 !important;
    border-radius: 14px !important;
    padding: 16px 14px !important;
    box-shadow: 0 4px 12px rgba(186, 133, 31, 0.06) !important;
  }

  .film-pillar-card h4 {
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #3c183d !important;
    margin-bottom: 4px !important;
  }

  .film-pillar-card p {
    font-size: 12px !important;
    color: #555555 !important;
    line-height: 1.4 !important;
    margin: 0 !important;
  }

  .founder-film-quote {
    display: block !important;
    background: linear-gradient(135deg, rgba(60,24,61,0.03), rgba(197,154,69,0.08)) !important;
    border-left: 4px solid #c59a45 !important;
    padding: 14px 18px !important;
    border-radius: 0 12px 12px 0 !important;
    margin-top: 20px !important;
    margin-bottom: 24px !important;
  }

  .founder-film-quote p {
    font-family: Georgia, serif !important;
    font-style: italic !important;
    font-size: 14.5px !important;
    color: #3c183d !important;
    margin: 0 0 4px 0 !important;
  }

  .founder-film-quote cite {
    font-size: 12px !important;
    font-weight: 700 !important;
    color: #8b6214 !important;
    font-style: normal !important;
  }
}

/* MOBILE SCREEN ONLY (<= 768px) */
@media (max-width: 768px) {
  /* Smaller Headings for Mobile */
  h1 { font-size: clamp(22px, 5.8vw, 27px) !important; line-height: 1.25 !important; }
  h2 { font-size: clamp(19px, 5vw, 23px) !important; line-height: 1.3 !important; }
  h3 { font-size: clamp(16px, 4.2vw, 19px) !important; line-height: 1.3 !important; }

  /* Global Container Adjustments */
  .section-wrap, .container, .program-panel, .header-inner, main, footer {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    box-sizing: border-box !important;
  }

  /* Reduce excessive vertical space between sections on Mobile */
  .section-space, .faq-wrap, .faq-wrap.has-backdrop, section.faq-wrap, #faq, .faq, .ads-faq {
    padding-top: 48px !important;
    padding-bottom: 16px !important;
    margin-top: 0 !important;
  }

  .service-quote-link-wrap {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .faq-intro {
    margin-bottom: 10px !important;
    padding-top: 20px !important;
  }

  .faq-intro h2 {
    margin-bottom: 4px !important;
  }

  /* Header Controls on Mobile */
  .header-actions {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
  }

  .header-enquiry {
    padding: 5px 12px !important;
    min-height: 30px !important;
    height: 30px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    border-radius: 20px !important;
    gap: 4px !important;
    margin: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: none !important;
  }

  .header-enquiry svg {
    width: 10px !important;
    height: 10px !important;
  }

  .menu-toggle {
    display: inline-flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 3.5px !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    padding: 6px 4px !important;
    margin: 0 !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    border-radius: 0 !important;
    cursor: pointer !important;
  }

  .menu-toggle .dot {
    display: block !important;
    width: 4.5px !important;
    height: 4.5px !important;
    border-radius: 50% !important;
    background-color: #3C183D !important;
  }

  /* Mobile Side Navigation Drawer Font Size (15px) */
  .mobile-side-drawer a, .mobile-side-drawer .drawer-nav-item, .mobile-side-drawer nav a, .drawer-nav-link, #mobile-nav a {
    font-size: 15px !important;
    font-weight: 500 !important;
    font-style: normal !important;
    padding: 8px 12px !important;
    margin-bottom: 2px !important;
    line-height: 1.3 !important;
  }

  /* Buttons Side-by-Side in 1 Row (Single Span) on Mobile */
  .hero-actions, .about-hero-actions {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 8px !important;
    width: 100% !important;
    flex-wrap: nowrap !important;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    box-sizing: border-box !important;
  }

  .hero-actions > a, .hero-actions > button,
  .hero-actions .button, .hero-actions .button-secondary,
  .about-hero-actions > a, .about-hero-actions > button,
  .about-hero-actions .button, .about-hero-actions .button-secondary {
    flex: 1 1 50% !important;
    width: 50% !important;
    max-width: 50% !important;
    min-width: 0 !important;
    padding: 9px 6px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    border-radius: 50px !important;
    box-sizing: border-box !important;
    white-space: normal !important;
    line-height: 1.15 !important;
  }

  .hero-actions > a span, .hero-actions .button span, .hero-actions .button-secondary span,
  .about-hero-actions > a span, .about-hero-actions .button span {
    white-space: normal !important;
    display: inline-block !important;
    max-width: 100% !important;
    overflow: visible !important;
  }

  .hero-actions svg, .about-hero-actions svg {
    width: 12px !important;
    height: 12px !important;
    margin-left: 3px !important;
    flex-shrink: 0 !important;
  }

  /* Single Column Layout For Most Grids Except Service Mosaic & Footer */
  .hero, .experience-grid, .stats-card-grid, .trust-stats-grid,
  .one-call-grid, .triad, .steps, .formats, .testimonial-grid,
  .beliefs, .approach-grid, .meet, .founder-intro-card,
  .about-hero-grid, .story-grid, .faq, .footer-cta-box, .reel-track,
  .consultation-journey, .service-card-luxury, .compare, .stays-grid,
  .ads-option-columns, .ads-enquiry-grid, .contact-grid {
    grid-template-columns: 1fr !important;
    flex-direction: column !important;
    gap: 20px !important;
  }

  .hero > *, .experience-grid > *, .stats-card-grid > *,
  .trust-stats-grid > *, .one-call-grid > *, .triad > *,
  .steps > *, .formats > *, .testimonial-grid > *, .beliefs > *,
  .approach-grid > *, .meet > *, .founder-intro-card > *,
  .about-hero-grid > *, .story-grid > *, .faq > *, .footer-cta-box > *,
  .consultation-journey > *, .service-card-luxury > *, .compare > *,
  .stays-grid > *, .ads-option-columns > *, .ads-enquiry-grid > *, .contact-grid > * {
    grid-column: span 1 / -1 !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Card Spacing under "How she works with you" on Mobile */
  .service-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
    width: 100% !important;
  }

  .service-card {
    margin-bottom: 16px !important;
    border-radius: 16px !important;
    box-shadow: 0 4px 14px rgba(60, 24, 61, 0.05) !important;
    padding: 16px !important;
    background: #ffffff !important;
  }

  /* Service Page 2x2 Grid UI on Mobile */
  .service-mosaic {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 12px !important;
    width: 100% !important;
    margin-top: 16px !important;
    margin-bottom: 24px !important;
  }

  .service-mosaic-card {
    grid-column: span 1 !important;
    width: 100% !important;
    height: 140px !important;
    min-height: 140px !important;
    border-radius: 16px !important;
    overflow: hidden !important;
    position: relative !important;
    display: block !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12) !important;
  }

  .mosaic-card-bg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .mosaic-card-bg img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }

  .mosaic-overlay {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%) !important;
  }

  .mosaic-card-content {
    position: absolute !important;
    bottom: 12px !important;
    left: 12px !important;
    right: 12px !important;
    z-index: 2 !important;
    color: #ffffff !important;
  }

  .mosaic-num {
    display: block !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #f7d686 !important;
    line-height: 1.1 !important;
    margin-bottom: 2px !important;
  }

  .mosaic-title {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    line-height: 1.2 !important;
    display: block !important;
  }

  /* Pretty Mobile Footer Styling */
  .site-footer {
    background: #2a122b !important;
    padding-top: 24px !important;
    padding-bottom: 20px !important;
  }

  .footer-cta-box {
    padding: 16px !important;
    border-radius: 16px !important;
    background: rgba(255,255,255,0.04) !important;
    border: 1px solid rgba(215,208,189,0.15) !important;
    margin-bottom: 20px !important;
    text-align: center !important;
  }

  .footer-cta-text h2 {
    font-size: 18px !important;
    margin-bottom: 4px !important;
    color: #ffffff !important;
  }

  .footer-cta-text p {
    font-size: 12.5px !important;
    color: #d7d0bd !important;
    margin-bottom: 12px !important;
  }

  .footer-cta-btn {
    width: 100% !important;
    padding: 10px 14px !important;
    font-size: 12.5px !important;
    border-radius: 50px !important;
    justify-content: center !important;
  }

  .footer-content {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 16px !important;
    align-items: start !important;
    width: 100% !important;
  }

  .footer-brand {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    margin-bottom: 8px !important;
  }

  .footer-col-title {
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 1.5px !important;
    color: #e5d8ba !important;
    margin-bottom: 10px !important;
    display: block !important;
  }

  .footer-nav a {
    font-size: 13px !important;
    color: #faf6f0 !important;
    padding: 5px 0 !important;
    display: block !important;
  }

  .footer-social-list li {
    margin-bottom: 8px !important;
  }

  .social-link {
    font-size: 13px !important;
    color: #faf6f0 !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
  }

  .footer-bottom-bar {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    margin-top: 16px !important;
    padding-top: 14px !important;
    border-top: 1px solid rgba(215,208,189,0.15) !important;
    font-size: 11px !important;
    line-height: 1.4 !important;
    color: #a59c8a !important;
    text-align: center !important;
  }

  .hero-proof {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    justify-content: space-between !important;
    gap: 6px !important;
    width: 100% !important;
    margin-top: 18px !important;
    margin-bottom: 20px !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }

  .hero-proof > span {
    flex: 1 1 0px !important;
    width: 32% !important;
    min-width: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    background: #faf4e8 !important;
    border: 1px solid #e2c992 !important;
    border-radius: 10px !important;
    padding: 8px 4px !important;
    box-shadow: 0 2px 6px rgba(186, 133, 31, 0.08) !important;
    box-sizing: border-box !important;
    font-size: 10.5px !important;
    line-height: 1.2 !important;
    color: #555555 !important;
    font-weight: 500 !important;
  }

  .hero-proof > span strong {
    display: block !important;
    font-size: 16px !important;
    font-weight: 800 !important;
    color: #7a5410 !important;
    line-height: 1.1 !important;
    margin-bottom: 2px !important;
  }

  .founder-film-pillars, .founder-film-quote {
    display: none !important;
  }

  .hero-portrait-stage, .zodiac-wheel-layer, .book-cover-stage {
    max-width: 100% !important;
    overflow: hidden !important;
  }
}
</style></head>
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
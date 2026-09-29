"use client";

import { asset } from "@/lib/assets";
import { site } from "@/content/site";

export function FounderIntroSection() {
  const handlePlayClick = () => {
    // Triggers client film viewer modal with Narayani Garg's introduction / video session
    window.dispatchEvent(
      new CustomEvent("nng:film", {
        detail: {
          id: "1LZi0IWknj_vDINvaMf1n0OdIQHnZOGyp",
          title: "Narayani Garg: Video Session",
        },
      })
    );
  };

  return (
    <section className="section-wrap section-space founder-intro-section" aria-label="Founder Video Introduction">
      <div className="founder-intro-card">
        {/* Left: Video Session Player */}
        <div className="intro-video-wrapper">
          <div
            className="intro-video-player"
            onClick={handlePlayClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handlePlayClick()}
            aria-label="Play Video Session"
          >
            {/* Top Video Bar */}
            <div className="video-player-topbar">
              <div className="video-player-brand">
                <span className="video-badge-nng">NNG</span>
                <span className="video-title-text">Transformation with NNG &bull; Video Session</span>
              </div>
              <div className="video-player-controls-mini">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 13c.04-.32.06-.66.06-1 0-.34-.02-.68-.06-1l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.02.66.07 1l-2.11 1.65c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64L19.4 13z" />
                </svg>
              </div>
            </div>

            {/* Video Thumbnail */}
            <img
              src={asset("/images/narayani-portrait-684.webp")}
              alt="Narayani Garg Video Session"
              className="intro-video-thumb"
              loading="lazy"
            />

            {/* Center Big Play Button (Purple Theme matching Image 3) */}
            <button
              type="button"
              className="intro-video-play-btn"
              aria-label="Play video session"
              onClick={(e) => {
                e.stopPropagation();
                handlePlayClick();
              }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>

            {/* Bottom Video Timeline & Quote */}
            <div className="video-player-bottombar">
              <div className="video-player-quote-row">
                <span className="video-timestamp">3:59 / 11:47</span>
                <span className="video-quote-caption">&ldquo;Upay tab kaam karta hai jab dimaag kaam karta hai...&rdquo;</span>
              </div>
              <div className="video-player-right-icons">
                <span className="youtube-tag">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF0000" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className="fullscreen-icon" aria-hidden="true">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Message & Stats Box */}
        <div className="intro-copy-wrapper">
          <blockquote className="intro-main-quote">
            &ldquo;After a decade in business and 8 years in Vedic practice, I built the guidance program you truly deserve.&rdquo;
          </blockquote>

          <p className="intro-bio-lead">
            Hi, I'm <strong>Narayani Garg</strong>, MBA &amp; practitioner of Vedic Astrology, Numerology, Vastu &amp; Subconscious Alignment.
          </p>

          <p className="intro-bio-text">
            I've helped <strong>1,200+ individuals</strong> break repeating cycles in career, marriage and health by looking at the one thing traditional remedies overlook: <em>the receptive state of your mind.</em>
          </p>

          {/* Stats Mini Card */}
          <div className="intro-stats-card">
            <div className="stats-card-header">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Join our community across 4 countries</span>
            </div>
            <div className="stats-card-grid">
              <div className="stats-item">
                <strong className="stats-number">1,200+</strong>
                <span className="stats-label">Guided</span>
              </div>
              <div className="stats-item">
                <strong className="stats-number">8+</strong>
                <span className="stats-label">Years Practice</span>
              </div>
              <div className="stats-item">
                <strong className="stats-number">100%</strong>
                <span className="stats-label">Confidential</span>
              </div>
            </div>
          </div>

          {/* CTA Button (Purple Theme matching Image 3) */}
          <a
            href={`https://wa.me/${site.whatsappNumber}?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="intro-cta-button"
            data-enquiry
            data-topic="Free Consultation"
          >
            <svg className="whatsapp-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span>Book a Free Consultation / Enquire</span>
            <span className="intro-cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

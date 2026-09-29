import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset } from "@/lib/assets";
import { legal, site } from "@/content/site";

/**
 * Luxury dark plum footer matching User Reference Image 2.
 * Includes Start with one conversation CTA, logo & brand tagline,
 * Pages column, and Follow column with authentic brand-colored icons.
 */
export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="section-wrap">
        {/* Footer Top CTA (Matches User Reference Image 2) */}
        <div className="footer-cta-box">
          <div className="footer-cta-text">
            <h2>Start with one conversation</h2>
            <p>Tell her team what is on your mind.</p>
          </div>
          <div>
            <EnquiryTrigger source="footer" className="button-primary footer-cta-btn">
              <span>Enquire about a consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </EnquiryTrigger>
          </div>
        </div>

        {/* Footer Middle Grid (Matches User Reference Image 2) */}
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src={asset("/images/nng-logo-400.webp")}
              alt="Transformation with NNG"
              width={160}
              height={84}
              loading="lazy"
            />
            <p>
              <strong>Narayani Garg, The Life Strategist</strong>
              Mind. Direction. Alignment.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer links">
            <strong className="footer-col-title">PAGES</strong>
            <Link prefetch={false} href="/">Home</Link>
            <Link prefetch={false} href="/services/">Services</Link>
            <Link prefetch={false} href="/hand-holding-program/">Hand Holding Program</Link>
            <Link prefetch={false} href="/about/">About Narayani</Link>
            <Link prefetch={false} href="/contact/">Contact & Enquire</Link>
          </nav>

          <div className="footer-social-box">
            <strong className="footer-col-title">FOLLOW</strong>
            <ul className="footer-social-list">
              <li>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-youtube"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF0000" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link footer-ig-link"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" style={{ borderRadius: "5px", flexShrink: 0 }}>
                    <defs>
                      <linearGradient id="footerIgGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFDC80" />
                        <stop offset="25%" stopColor="#F77737" />
                        <stop offset="50%" stopColor="#F56040" />
                        <stop offset="75%" stopColor="#FD1D1D" />
                        <stop offset="100%" stopColor="#C13584" />
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="22" height="22" rx="6" ry="6" fill="url(#footerIgGradient)" />
                    <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
                    <circle cx="17.2" cy="6.8" r="1.2" fill="#FFFFFF" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={"https://www.facebook.com/transformationwithnng/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-facebook"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-whatsapp"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Message on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Legal (Matches User Reference Image 2) */}
        <div className="footer-bottom-bar">
          <p>{legal.disclaimer}</p>
          <p>© 2026 Transformation with NNG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

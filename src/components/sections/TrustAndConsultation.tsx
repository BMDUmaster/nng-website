import React from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";

export function TrustStatsSection() {
  const stats = [
    { number: "52M+", label: "Monthly Views On Social Media" },
    { number: "5.9M+", label: "Followers Across Social Media" },
    { number: "8Lakh+", label: "Reports Delivered Successfully" },
    { number: "15+", label: "Years of Legacy" },
  ];

  return (
    <section className="trust-stats-section" aria-labelledby="trust-stats-title">
      <div className="section-wrap">
        <div className="trust-stats-header">
          <h2 id="trust-stats-title">
            A Journey Built on <span className="highlight-gold">Trust &amp; Proven Results</span>
          </h2>
          <p className="trust-stats-sub">
            Years of experience, guiding millions with accurate insights and meaningful transformation
          </p>
        </div>

        <div className="trust-stats-grid">
          {stats.map((stat, index) => (
            <div className="trust-stat-card" key={index}>
              <div className="trust-stat-number">{stat.number}</div>
              <p className="trust-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OneCallConsultationSection() {
  const features = [
    {
      title: "Vedic Birth Chart Analysis",
      description: "Understand your birth chart, life patterns, and future possibilities.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Celestial book / chart */}
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 4v2M12 14v2M7 10h2M15 10h2" />
        </svg>
      ),
    },
    {
      title: "Career & Business Guidance",
      description: "Get clear direction for career growth and business decisions.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Growth ladder / career */}
          <path d="M18 20V10M12 20V4M6 20v-6" />
          <path d="M4 4l8-2 8 2" />
          <circle cx="12" cy="4" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Relationship & Marriage",
      description: "Understand compatibility, challenges, and the right timing",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Intertwined harmonious hearts */}
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 12l2-2a2.828 2.828 0 0 1 4 4l-4 4" />
        </svg>
      ),
    },
    {
      title: "Remedies & Solution",
      description: "Get practical remedies to balance planetary influences.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Golden key & harmony */}
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m21 2-9.6 9.6M15.5 7.5l3 3M18.5 4.5l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="one-call-section" aria-labelledby="one-call-title">
      <div className="section-wrap">
        <div className="one-call-header">
          <h2 id="one-call-title">
            One Call Can <span className="highlight-gold">Change Everything</span>
          </h2>
          <p className="one-call-sub">
            Connect directly with Narayani Garg for a personal consultation that clears confusion, reveals the right direction, and helps you move forward with confidence. Available in Hindi and English
          </p>
          <div className="ornamental-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>
        </div>

        <div className="one-call-grid">
          {features.map((item, index) => (
            <div className="one-call-card" key={index}>
              <div className="one-call-icon-wrap">
                <div className="one-call-icon-inner">
                  {item.icon}
                </div>
              </div>
              <h3 className="one-call-card-title">{item.title}</h3>
              <p className="one-call-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="one-call-cta">
          <EnquiryTrigger className="schedule-call-btn" source="home-one-call">
            <span>Schedule Your Call</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </EnquiryTrigger>
        </div>
      </div>
    </section>
  );
}

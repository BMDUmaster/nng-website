import { site } from "@/content/site";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";

export function ContactDock() {
  return (
    <aside className="contact-dock" aria-label="Quick contact options">
      {/* Top Green WhatsApp Pill Button (Exact match with Image 5) */}
      <a
        href={`https://wa.me/${site.whatsappNumber}?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-pill dock-whatsapp"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#FFFFFF" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Bottom Cream/Gold Enquiry Form Pill Button (Exact match with Image 5) */}
      <EnquiryTrigger source="contact-dock" className="dock-pill dock-form">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
        <span>Enquiry form</span>
      </EnquiryTrigger>
    </aside>
  );
}


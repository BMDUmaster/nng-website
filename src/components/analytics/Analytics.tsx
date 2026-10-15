import Script from "next/script";

/**
 * Tracking for the main website, the same three tags as the landing pages: Google Tag Manager, Google Analytics 4
 * and Microsoft Clarity. NEXT_PUBLIC_GA_ID may override the GA4 id. Consent defaults to denied for the UK, EEA and
 * Switzerland, so those visitors are measured without cookies.
 */
const GTM_ID = "GTM-P3KXR4GL";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-8FZ4BE77QW";
const CLARITY_ID = "yxm2cn04j3";

const DENIED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT",
  "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

export function Analytics() {
  const gtag = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', region: ${JSON.stringify(DENIED_REGIONS)} });
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  const clarity = `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {gtag}
      </Script>
      <Script id="gtm-init" strategy="afterInteractive">
        {gtm}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="clarity-init" strategy="afterInteractive">
        {clarity}
      </Script>
    </>
  );
}

/** Tag Manager for visitors without JavaScript; placed straight after the opening body tag. */
export function AnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

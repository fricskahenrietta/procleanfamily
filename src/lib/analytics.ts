// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Update consent to granted
  window.gtag('consent', 'update', {
    'analytics_storage': 'granted',
    'ad_storage': 'denied' // Keep ad storage denied if you don't use ads
  });

  // Initialize GA
  window.gtag('js', new Date());
  window.gtag('config', 'G-4R07G0VN5V', {
    page_path: window.location.pathname,
  });

  console.log("Google Analytics Initialized with consent");
};

export const logPageView = (url?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const pageUrl = url || window.location.pathname;
  window.gtag('event', 'page_view', {
    page_path: pageUrl,
  });
  
  console.log(`Page view: ${pageUrl}`);
};

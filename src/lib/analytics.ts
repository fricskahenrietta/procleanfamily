// Google Tag Manager utility functions

declare global {
	interface Window {
		dataLayer: any[];
	}
}

export const initGA = () => {
	if (typeof window === 'undefined') return;

	// Push consent granted event to GTM
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'consent_update',
		analytics_storage: 'granted',
		ad_storage: 'denied'
	});

	console.log("Google Tag Manager: Consent granted");
};

export const denyGA = () => {
	if (typeof window === 'undefined') return;

	// Push consent denied event to GTM
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'consent_update',
		analytics_storage: 'denied',
		ad_storage: 'denied'
	});

	console.log("Google Tag Manager: Consent denied");
};

export const logPageView = (url?: string) => {
	if (typeof window === 'undefined') return;

	const pageUrl = url || window.location.pathname;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'page_view',
		page_path: pageUrl,
	});

	console.log(`Page view: ${pageUrl}`);
};

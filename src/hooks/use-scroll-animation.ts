'use client';
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
	const [isInView, setIsInView] = useState(false);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					// Once in view, stop observing to prevent re-triggering
					if (ref.current) {
						observer.unobserve(ref.current);
					}
				}
			},
			{ threshold }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [threshold]);

	return { ref, isInView };
}

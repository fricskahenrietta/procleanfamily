'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { initGA } from "@/lib/analytics";
import eventBus from "@/lib/event-bus";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie_consent");
    
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      // If user previously accepted, initialize GA
      initGA();
    }
  }, []);

  useEffect(() => {
    const handleReset = () => {
      localStorage.removeItem("cookie_consent");
      setIsVisible(true);
    };

    eventBus.on("resetCookieConsent", handleReset);

    return () => {
      eventBus.off("resetCookieConsent", handleReset);
    };
  }, []);

  const handleConsent = (consent: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent", consent);
    setIsVisible(false);

    if (consent === "accepted") {
      initGA();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 z-50 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Weboldalunkon cookie-kat (sütiket) használunk, hogy a legjobb felhasználói élményt nyújthassuk. Az adatok névtelenek, és kizárólag a weboldal forgalmának elemzésére szolgálnak a Google Analytics segítségével.
        </p>
        <div className="flex gap-4 flex-shrink-0">
          <Button variant="default" className="cursor-pointer" onClick={() => handleConsent("accepted")}>
            Elfogadom
          </Button>
          <Button variant="outline" className="cursor-pointer" onClick={() => handleConsent("declined")}>
            Elutasítom
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

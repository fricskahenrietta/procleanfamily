'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ScrollToContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const contactSection = document.getElementById("contact");
      const showThreshold = 500; // Pixels to scroll before showing the button

      let shouldBeVisible = false;

      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top;
        // Show only if scrolled past the threshold AND the contact section is not yet near the top of the viewport.
        // Hide when the top of the contact section is less than 80% of the viewport height away.
        shouldBeVisible = window.scrollY > showThreshold && contactTop > window.innerHeight * 0.8;
      } else {
        // Fallback for pages without a contact section (though this component is only on Index)
        shouldBeVisible = window.scrollY > showThreshold;
      }

      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-6 left-6 transition-all duration-300 z-40 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <Button
        variant="default"
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg"
        onClick={scrollToContact}
        aria-label="Scroll to contact form"
        disabled={!isVisible}
      >
        <Mail className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ScrollToContactCTA;

'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const backgroundImage = isMobile ? "/images/office-form-bg.jpg" : "/images/hero-cleaners.jpg";
  const backgroundPosition = isMobile ? 'center' : 'right center';

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full lg:w-3/4 bg-gradient-to-r from-background via-background/95 to-background/0"></div>

      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Tiszta iroda, <br className="hidden md:block" />Megbízható kezekben.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professzionális irodai takarítás családi vállalkozástól.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg cursor-pointer"
            onClick={scrollToContact}
          >
            Kérjen Ajánlatot Most
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
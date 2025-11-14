'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Napi Takarítás",
      image: "/images/service-office.jpg",
      description: "Rendszeres, naprakész tisztítás irodák számára. Asztalok, padlók, közös terek teljes körű takarítása professzionális eszközökkel.",
    },
    {
      title: "Nagytakarítás",
      image: "/images/service-deep.jpg",
      description: "Alapos, mélyreható takarítás minden zugban. Szőnyegtisztítás, bútorok tisztítása és fertőtlenítés kiemelt gondossággal.",
    },
    {
      title: "Ablaktisztítás",
      image: "/images/service-window.jpg",
      description: "Kristálytiszta ablakok belül és kívül. Magasban dolgozó csapatunk biztonságosan takarít minden magasságban.",
    },
    {
      title: "Speciális Szolgáltatások",
      image: "/images/service-specialized.jpg",
      description: "Konyhai területek, szaniterek és különleges helyiségek szakszerű takarítása. Egyedi igények kielégítése rugalmas megoldásokkal.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMobile && isInView) {
      interval = setInterval(() => {
        setFlippedCard(prev => (prev === null || prev >= services.length - 1 ? 0 : prev + 1));
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isMobile, isInView, services.length]);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setFlippedCard(flippedCard === index ? null : index);
    } else {
      // Desktop hover logic is handled by onMouseEnter/onMouseLeave
    }
  };


  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Szolgáltatásaink
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Átfogó takarítási megoldások minden vállalkozás számára
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 md:h-80 rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => !isMobile && setFlippedCard(index)}
              onMouseLeave={() => !isMobile && setFlippedCard(null)}
              onClick={() => handleInteraction(index)}
            >
              {/* Front Side */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  flippedCard === index ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 gradient-primary flex items-center justify-center p-6 text-center transition-all duration-500 ${
                  flippedCard === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
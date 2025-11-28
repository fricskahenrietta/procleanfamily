'use client';

import Image from "next/image";

const Testimonials = () => {
  const partners = [
    {
      name: "Pentolt Kft.",
      logo: "/images/pentolt.jpg",
    },
    {
      name: "Wanzl Kft.",
      logo: "/images/wanzl.png",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground my-4">
          Kiemelt Partnereink
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 md:mb-16">
          Büszkék vagyunk rá, hogy ilyen neves cégek választottak minket
        </p>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="relative h-20 w-48">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="font-semibold text-lg text-foreground">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

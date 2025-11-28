'use client';

import Image from "next/image";
import clsx from "clsx";

const Testimonials = () => {
  const partners = [
    {
      name: "Pentolt Kft.",
      logo: "/images/pentolt.png",
    },
    {
      name: "Wanzl Magyarország Kft.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={clsx("flex flex-col items-center justify-center", {
                  "gap-2": partner.logo.includes("pentolt"),
                  "gap-4": !partner.logo.includes("pentolt"),
                })}
            >
              <div
                className={clsx("relative w-48 h-[89px]", {
                  "p-2": partner.logo.includes("pentolt"),
                })}
              >
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

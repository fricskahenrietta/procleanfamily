'use client';
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      company: "TechHub Kft.",
      testimonial:
        "A procleanfamily csapata rendkívül professzionális és megbízható. Irodánk minden nap tiszta és rendezett, ami nagyban hozzájárul a produktív munkakörnyezethez. Csak ajánlani tudom őket!",
      name: "Nagy Péter",
      position: "Ügyvezető Igazgató",
    },
    {
      company: "Innovent Zrt.",
      testimonial:
        "Már több mint 3 éve dolgozunk együtt a procleanfamily-val, és maximálisan elégedettek vagyunk. Rugalmasak, precízek és mindig szem előtt tartják az ügyfél igényeit. Kiváló ár-érték arány!",
      name: "Kovács Anna",
      position: "Facility Manager",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground my-4">
          Ügyfeleink Mondták
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 md:mb-16">
          Hallgassa meg elégedett partnereink véleményét
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-smooth"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                {testimonial.company}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

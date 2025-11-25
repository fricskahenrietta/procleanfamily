'use client';
import ReusableForm from "./ReusableForm";
import AnimatedDecorations from "./AnimatedDecorations";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactForm = () => {
  const isMobile = useIsMobile();
  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative">
      {!isMobile && <AnimatedDecorations />}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center relative">
          {isMobile && <AnimatedDecorations />}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lépj Velünk Kapcsolatba
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Töltse ki az alábbi űrlapot és 48 órán belül felvesszük Önnel a kapcsolatot.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
           <div className="bg-card p-6 md:p-8 rounded-xl shadow-soft">
                <ReusableForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
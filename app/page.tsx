import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Parallax from "@/components/Parallax";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToContactCTA from "@/components/ScrollToContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Services />
      <WhyUs />
      <Parallax />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ScrollToContactCTA />
    </div>
  );
}

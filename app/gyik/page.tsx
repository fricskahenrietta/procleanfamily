import FaqAccordion from "@/components/FaqAccordion";
import ReusableForm from "@/components/ReusableForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-8">Gyakran Ismételt Kérdések</h1>
            <p className="text-xl text-muted-foreground mt-4">Válaszok a leggyakoribb kérdéseitekre.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column: FAQ Accordion */}
            <div className="md:col-start-1">
              <FaqAccordion />
            </div>

            {/* Right Column: Contact Form */}
            <div className="sticky top-24">
               <h3 className="text-2xl font-bold text-foreground mb-4">Kérdése van?</h3>
               <p className="text-muted-foreground mb-6">Töltse ki űrlapunkat és felvesszük Önnel a kapcsolatot!</p>
              <div className="bg-card p-8 rounded-xl shadow-soft">
                <ReusableForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

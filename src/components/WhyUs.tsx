'use client';
import { Home, Sparkles, Award, HeartHandshake } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Home,
      title: "Családi vállalkozás, profi minőség",
      description: "A ProClean Family egy elhivatott családi vállalkozás, ahol a megbízhatóság és a precíz munka alapérték. Minden feladatot úgy végzünk, mintha a saját irodánkról lenne szó – igényesen, pontosan, szívvel.",
    },
    {
      icon: Sparkles,
      title: "A tisztaság ereje",
      description: "Tiszta környezetben könnyebb a fókusz és jobb a hangulat. Hiszünk abban, hogy a rendezett, friss munkatér nemcsak szép, hanem inspiráló is – segít abban, hogy csapata a legjobbat hozza ki magából.",
    },
    {
      icon: Award,
      title: "Mindig fejlődünk",
      description: "Új partnerekkel, modern takarítóeszközökkel és még hatékonyabb megoldásokkal fejlesztjük szolgáltatásainkat. Célunk, hogy minden ügyfelünk számára a legmagasabb színvonalat biztosítsuk – nap mint nap.",
    },
    {
      icon: HeartHandshake,
      title: "Tisztaság. Bizalom. ProClean.",
      description: "A ProClean Familynél a tisztaság nemcsak munka, hanem öröklött családi érték. Kis, összeszokott csapatként szívvel-lélekkel dolgozunk, hogy minden hely ragyogjon, ahonnan kilépünk.",
    },
  ];

  return (
    
    <section id="faq" className="pt-20 md:pt-28 pb-12 md:pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-foreground mb-4">
          Tisztaság, amire mindig számíthat
        </h2>
        <p className="text-xl text-center md:text-left text-muted-foreground mb-12 md:mb-16 max-w-4xl">
          A ProClean Family egy családi vállalkozás, ahol a tisztaság érték. <br className="hidden sm:block" />Hiszünk benne, hogy a rendezett környezet inspirál, feltölt és megnyugtat.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

import { Sparkles, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Minőségi Tisztaság",
      description: "Professzionális eszközökkel és környezetbarát tisztítószerekkel dolgozunk.",
    },
    {
      icon: Clock,
      title: "Rugalmas Időpontok",
      description: "Igazodunk partnereink igényeihez. <br/> A ProClean Family mindig pontos és precíz.",
    },
    {
      icon: Shield,
      title: "Megbízható Csapat",
      description: "Ellenőrzött, tapasztalt munkatársaink garantálják a kifogástalan minőséget.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 md:mb-16">
          Miért Válasszon Minket?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 animate-float">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: benefit.description }}>
                  
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

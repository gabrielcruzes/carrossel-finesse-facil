import { Card } from "@/components/ui/card";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Economia de Tempo",
    description: "Crie carrosseis profissionais em menos de 5 minutos"
  },
  {
    icon: "🎨",
    title: "Design Profissional",
    description: "Templates criados por designers especialistas"
  },
  {
    icon: "📈",
    title: "Mais Engajamento",
    description: "Aumente suas visualizações e interações"
  },
  {
    icon: "💰",
    title: "Economia Real",
    description: "Pare de gastar com designers freelancers"
  },
  {
    icon: "📱",
    title: "Carrosseis Únicos",
    description: "Mais de 10 layouts exclusivos para carrossel"
  },
  {
    icon: "🔄",
    title: "Fácil Personalização",
    description: "Edite textos, cores e imagens facilmente, mesmo sem o Canva PRO"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Por Que Escolher Nossos Templates?
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja os benefícios que vão transformar seu conteúdo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="w-full h-full p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

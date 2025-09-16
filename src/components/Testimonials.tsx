import { Card } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Empreendedora Digital",
    image: testimonial1,
    text: "Esses templates salvaram minha vida! Antes eu gastava horas tentando criar posts bonitos. Agora faço tudo em minutos e o engajamento triplicou!"
  },
  {
    name: "Carlos Mendes", 
    role: "Dono de Restaurante",
    image: testimonial2,
    text: "Comprei pensando que seria mais um produto qualquer, mas me surpreendi! Os templates são realmente profissionais e fáceis de usar."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja os resultados reais de quem já transformou seu conteúdo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-secondary">{testimonial.name}</h3>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex text-accent text-xl mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
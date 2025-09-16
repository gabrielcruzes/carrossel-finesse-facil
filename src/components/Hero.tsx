import { CTAButton } from "./CTAButton";
import packMockup from "@/assets/pack-mockup.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-black text-primary-foreground leading-tight">
            Crie Artes 
            <span className="block text-accent">Profissionais</span>
            em Minutos!
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
            Transforme seu conteúdo com templates Canva exclusivos. 
            <strong className="text-accent"> Sem ser designer, sem perder tempo!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <CTAButton size="xl" className="text-xl px-12 py-8">
              🚀 QUERO MEUS TEMPLATES AGORA
            </CTAButton>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <span className="text-success text-xl">✓</span>
              <span>Download Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success text-xl">✓</span>
              <span>Canva Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success text-xl">✓</span>
              <span>Garantia 7 Dias</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={packMockup} 
            alt="Pack de Templates Canva Editáveis" 
            className="max-w-full h-auto shadow-glow rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
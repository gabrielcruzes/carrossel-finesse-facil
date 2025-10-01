import { CTAButton } from "./CTAButton";
import packMockup from "@/assets/pack-mockup.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center w-full">
      <div className="mx-auto w-full max-w-6xl px-4 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="text-center lg:text-left space-y-8 w-full">
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="O Arquivo Secreto do Carrossel Finesse Logo"
              className="h-20 lg:h-24 w-auto max-w-full"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight animate-slide-in-left">
            Crie Artes 
            <span className="block text-accent">Profissionais</span>
            em Minutos!
          </h1>
          
          <p className="text-xl lg:text-2xl text-white font-medium">
            Transforme seu conteúdo com templates Canva exclusivos. 
            <strong className="font-semibold text-white"> Sem ser designer, sem perder tempo!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <CTAButton
              size="xl"
              className="w-full max-w-[calc(100%-4px)] mx-[2px] sm:w-auto sm:max-w-none sm:mx-auto text-lg sm:text-xl px-6 sm:px-12 py-6 sm:py-8 bg-gradient-to-r from-emerald-500 to-lime-400 text-white hover:from-emerald-400 hover:to-lime-300"
            >
              🚀 QUERO MEUS TEMPLATES AGORA
            </CTAButton>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 sm:gap-4 text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl text-white">✓</span>
              <span className="text-white">Compre e receba na hora</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl text-white">✓</span>
              <span className="text-white">Funciona no Canva Gratuito e PRO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl text-white">✓</span>
              <span className="text-white">Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center w-full">
          <img 
            src={packMockup} 
            alt="Pack de Templates Canva Editáveis" 
            className="max-w-full h-auto rounded-2xl shadow-none sm:shadow-glow"
          />
        </div>
      </div>
    </section>
  );
};

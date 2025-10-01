import { CTAButton } from "./CTAButton";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

export const PricingOffer = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-primary-foreground">
            Por tempo limitado, acesso completo por apenas
          </p>
        </div>
        
        <Card className="w-full max-w-3xl mx-auto p-6 sm:p-10 lg:p-12 text-center bg-card/95 backdrop-blur">
          <div className="mb-8 space-y-6">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="O Arquivo Secreto do Carrossel Finesse Logo" className="h-16 w-auto" />
            </div>
            <div className="flex flex-col sm:flex-wrap sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <span className="text-2xl sm:text-3xl text-white/70 line-through">
                De R$ 197,00
              </span>
              <span className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                R$ 49,90
              </span>
            </div>
            <p className="text-base sm:text-lg text-white/80">
              💳 <strong>12x de R$ 4,99</strong> no cartão ou <strong>R$ 49,90 à vista</strong>
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            <div className="grid gap-6 text-left sm:grid-cols-2">
              <div className="space-y-3 text-base sm:text-lg">
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>+10 Templates Exclusivos</span>
                </div>
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>Download Imediato</span>
                </div>
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>Funciona no Canva Gratuito</span>
                </div>
              </div>
              <div className="space-y-3 text-base sm:text-lg">
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>Designs Testados e Aprovados</span>
                </div>
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>Suporte Exclusivo</span>
                </div>
                <div className="flex items-start gap-2 text-white">
                  <span className="text-success text-xl">✓</span>
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
          </div>

          <CTAButton
            size="xl"
            className="w-full max-w-[calc(100%-4px)] mx-[2px] sm:w-auto sm:max-w-none sm:mx-auto mb-6 text-center"
          >
            🚀 EU QUERO O DESCONTO
          </CTAButton>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 text-center">
            <span className="w-full sm:w-auto">🔒 Compra 100% Segura</span>
            <span className="w-full sm:w-auto">⚡ Acesso Imediato</span>
            <span className="w-full sm:w-auto">🛡️ Garantia 7 Dias</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

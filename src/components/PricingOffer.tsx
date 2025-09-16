import { CTAButton } from "./CTAButton";
import { Card } from "@/components/ui/card";

export const PricingOffer = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Por tempo limitado, acesso completo por apenas
          </p>
        </div>
        
        <Card className="p-12 text-center bg-card/95 backdrop-blur">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl text-muted-foreground line-through">
                De R$ 197,00
              </span>
              <span className="text-6xl lg:text-7xl font-black text-primary">
                R$ 49,90
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              💳 <strong>12x de R$ 4,99</strong> no cartão ou <strong>R$ 49,90 à vista</strong>
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>+50 Templates Exclusivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Download Imediato</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Funciona no Canva Gratuito</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Atualizações Gratuitas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Suporte Exclusivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-success text-xl">✓</span>
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <CTAButton size="xl" className="w-full max-w-lg mx-auto mb-6">
            🚀 SIM, EU QUERO AGORA POR R$ 49,90
          </CTAButton>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>🔒 Compra 100% Segura</span>
            <span>⚡ Acesso Imediato</span>
            <span>🛡️ Garantia 7 Dias</span>
          </div>
        </Card>
      </div>
    </section>
  );
};
import { CTAButton } from "./CTAButton";

export const Urgency = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
          ⚠️ ATENÇÃO: Esta Oferta é Por Tempo Limitado!
        </h2>
        <p className="text-xl text-accent-foreground/90 mb-8">
          O preço promocional de R$ 49,90 pode mudar a qualquer momento. 
          <br className="hidden md:block" />
          <strong>Garante já o seu pack completo!</strong>
        </p>
        
        <div className="bg-accent-foreground/10 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-accent-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold">+500</div>
              <div className="text-sm opacity-90">Vendas Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">97%</div>
              <div className="text-sm opacity-90">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm opacity-90">Suporte Rápido</div>
            </div>
          </div>
        </div>
        
        <CTAButton size="xl" className="bg-primary hover:bg-primary/90 mb-4">
          🔥 APROVEITAR OFERTA AGORA - R$ 49,90
        </CTAButton>
        
        <p className="text-sm text-accent-foreground/75">
          ⏰ Restam apenas algumas horas para aproveitar este preço especial
        </p>
      </div>
    </section>
  );
};
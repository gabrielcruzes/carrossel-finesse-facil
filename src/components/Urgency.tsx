import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export const Urgency = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section className="py-16 bg-accent text-white">
      <div className="mx-auto w-full max-w-4xl px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          ⚠️ ATENÇÃO: Esta Oferta é Por Tempo Limitado!
        </h2>
        <p className="text-xl text-white/90 mb-8">
          O preço promocional de R$ 49,90 pode mudar a qualquer momento. 
          <br className="hidden md:block" />
          <strong className="text-white">Garante já o seu pack completo!</strong>
        </p>

        <div className="bg-accent-foreground/10 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">+500</div>
              <div className="text-sm opacity-90 text-white/80">Vendas Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">97%</div>
              <div className="text-sm opacity-90 text-white/80">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-sm opacity-90 text-white/80">Suporte Rápido</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm uppercase tracking-wide text-white/80">Oferta expira em</p>
          <div className="font-mono text-4xl font-semibold text-white">
            {hours}:{minutes}:{seconds}
          </div>
        </div>

        <CTAButton
          size="xl"
          className="w-full max-w-[calc(100%-4px)] mx-[2px] sm:w-auto sm:max-w-none sm:mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-lime-400 text-white hover:from-emerald-400 hover:to-lime-300"
        >
          🔥 APROVEITAR OFERTA AGORA 🔥
        </CTAButton>

        <p className="text-sm text-white/80">
          ⏰ Restam apenas algumas horas para aproveitar este preço especial
        </p>
      </div>
    </section>
  );
};

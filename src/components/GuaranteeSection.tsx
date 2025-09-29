import { Card } from "@/components/ui/card";
import guaranteeBadge from "@/assets/guarantee-badge.png";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-background border-2 border-primary/20">
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
            <div className="mx-auto">
              <img 
                src={guaranteeBadge} 
                alt="Garantia de 7 dias"
                className="w-48 h-48 object-contain drop-shadow-lg"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Experimente o <strong>Arquivo Secreto do Carrossel Finesse</strong> por 7 dias completos. 
                Se você não ficar <strong>100% satisfeito</strong> com os resultados, basta enviar um email 
                e devolvemos <strong>todo o seu dinheiro</strong>, sem perguntas e sem burocracia.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground mb-4">
                  <strong>Por que oferecemos essa garantia?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Porque temos absoluta certeza da qualidade dos nossos templates. 
                  Milhares de empreendedores já transformaram seus negócios com este método, 
                  e queremos que você tenha a mesma oportunidade, <strong>sem nenhum risco</strong>.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">✓</span>
                  <span>Processo 100% digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">✓</span>
                  <span>Reembolso rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary text-lg">✓</span>
                  <span>Sem perguntas</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

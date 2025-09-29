import { Card } from "@/components/ui/card";
import mentorPhoto from "@/assets/mentor-photo.jpg";

export const MentorSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Quem Criou Este Método?
          </h2>
        </div>
        
        <Card className="max-w-4xl mx-auto p-8 lg:p-12">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
            <div className="mx-auto">
              <img 
                src={mentorPhoto} 
                alt="Mentora - Especialista em Design de Carrosseis"
                className="w-64 h-64 rounded-lg object-cover shadow-elegant"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-2">
                Ana Carolina Rodrigues
              </h3>
              <p className="text-lg text-primary mb-4 font-semibold">
                Especialista em Marketing Digital & Design Estratégico
              </p>
              
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Com mais de <strong>8 anos de experiência</strong> em marketing digital e design, já ajudei 
                  <strong> mais de 5.000 empreendedores</strong> a transformarem suas redes sociais em máquinas de vendas.
                </p>
                
                <p className="leading-relaxed">
                  Criei o <strong>Arquivo Secreto do Carrossel Finesse</strong> depois de perceber que meus alunos 
                  gastavam horas criando designs do zero. Agora, eles criam carrosseis profissionais em minutos 
                  e aumentam seu engajamento em até <strong>300%</strong>.
                </p>
                
                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-sm text-muted-foreground mb-2">Resultados comprovados:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>+5.000 alunos transformados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Média de 300% de aumento em engajamento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Templates usados por marcas reconhecidas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

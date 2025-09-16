import carouselExamples from "@/assets/carousel-examples.jpg";

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Carrosseis profissionais editáveis para seu negócio decolar
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src={carouselExamples} 
              alt="Exemplos de Templates de Carrossel" 
              className="rounded-2xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">
              🎠 Templates de Carrossel
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Mais de 10 modelos únicos de carrossel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Layouts para diferentes nichos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Fácil personalização de textos e cores</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Formatos otimizados para Instagram</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-muted-foreground mb-4">
            Todos os templates são 100% editáveis no Canva Gratuito
          </h3>
          <p className="text-lg text-muted-foreground">
            Sem necessidade de Canva Pro - funciona perfeitamente na versão gratuita!
          </p>
        </div>
      </div>
    </section>
  );
};
import carouselExamples from "@/assets/carousel-examples.jpg";
import storiesExamples from "@/assets/stories-examples.jpg";

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mais de 50 templates profissionais prontos para usar
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
                <span>15 modelos únicos de carrossel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Layouts para diferentes nichos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Fácil personalização de textos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Cores e fontes editáveis</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl font-bold text-secondary">
              📱 Stories & Posts
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>25 templates para Stories</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>20 layouts para Feed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Modelos para anúncios</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-success">✓</span>
                <span>Formatos otimizados</span>
              </li>
            </ul>
          </div>
          <div className="lg:order-1">
            <img 
              src={storiesExamples} 
              alt="Exemplos de Templates de Stories e Posts" 
              className="rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
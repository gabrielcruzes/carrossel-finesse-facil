import { CTAButton } from "./CTAButton";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Não Perca Esta Oportunidade!
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Transforme seu conteúdo agora e comece a criar carrosseis profissionais em minutos
        </p>
        
        <CTAButton size="xl" className="mb-12">
          🚀 GARANTIR MEUS TEMPLATES AGORA
        </CTAButton>
        
        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-sm opacity-75">
            © 2024 O Arquivo Secreto do Carrossel Finesse. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Este produto não tem nenhuma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
};
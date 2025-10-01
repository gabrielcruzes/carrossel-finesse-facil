import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter o Canva Pro para usar os templates?",
    answer: "Não! Todos os nossos templates funcionam perfeitamente na versão gratuita do Canva. Você não precisa pagar nada adicional."
  },
  {
    question: "Como recebo os templates após a compra?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um email com o link para download dos templates."
  },
  {
    question: "Posso usar os templates para clientes?",
    answer: "Sim! Você pode usar os templates para seus próprios projetos e também para trabalhos com clientes. A licença permite uso comercial."
  },
  {
    question: "E se eu não souber usar o Canva?",
    answer: "Os templates são super fáceis de personalizar! Basta clicar nos elementos que você quer alterar (texto, cores, imagens) e fazer as mudanças. Incluímos um guia rápido para ajudar."
  },
  {
    question: "Quanto tempo tenho para baixar os templates?",
    answer: "Seu acesso é vitalício! Você pode baixar os templates quantas vezes precisar, quando quiser."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se por qualquer motivo você não ficar satisfeito com os templates, basta entrar em contato em até 7 dias e devolvemos 100% do seu dinheiro."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire todas suas dúvidas antes da compra
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

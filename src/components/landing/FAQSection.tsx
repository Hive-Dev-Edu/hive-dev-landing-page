import { motion } from "framer-motion";
import {  Accordion, AccordionItem,  AccordionTrigger, AccordionContent } from "../ui/accordion";

const faqs = [
  {
    question: "Vocês usam IA?",
    answer:
      "Usamos recursos de inteligência artificial de forma auxiliar e transparente, sempre a serviço da mediação humana. A IA nunca substitui o julgamento pedagógico do professor — ela apoia, organiza e sugere, mas quem decide é gente.",
  },
  {
    question: "Os dados expõem estudantes?",
    answer:
      "Jamais. Todos os dados são tratados com responsabilidade e finalidade pedagógica clara. Nossos relatórios são voltados a apoiar intervenções, não a rotular ou constranger. Seguimos a LGPD e vamos além: tratamos dados educacionais como exigem — com cuidado.",
  },
  {
    question: "Isso serve para qualquer escola?",
    answer:
      "Nossas soluções são desenhadas para escolas e redes que acreditam em cultura de acompanhamento e melhoria contínua. Trabalhamos com contextos diversos, adaptando implantação e suporte ao cenário de cada instituição.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="heading-section text-center mb-10">Perguntas frequentes</h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-elevated border-border px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { motion } from "framer-motion";

const beliefs = [
  {
    title: "Educação não é só métrica",
    text: "Números ajudam, mas não contam a história toda. Aprender é um processo cheio de nuances, tentativas e recomeços que merecem ser vistos com cuidado.",
  },
  {
    title: "Escrita e avaliação são processos",
    text: "Escrever melhor e avaliar com sentido exigem tempo, retorno e iteração. Não existe atalho que substitua a prática orientada.",
  },
  {
    title: "Cooperação é tecnologia social",
    text: "Quando estudantes se ajudam mutuamente com orientação, todo mundo cresce — quem escreve, quem lê e quem media.",
  },
  {
    title: "Mediação importa",
    text: "A presença de um professor ou gestor que interpreta, orienta e intervém é insubstituível. Nossas ferramentas ampliam essa presença.",
  },
  {
    title: "Transparência e responsabilidade",
    text: "Trabalhamos com dados educacionais sensíveis. Isso exige clareza, ética e compromisso permanente com as pessoas envolvidas.",
  },
];

const BeliefsSection = () => {
  return (
    <section id="valores" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
            O que acreditamos
          </span>
          <h2 className="heading-section mb-4">
            Nosso manifesto de valores
          </h2>
          <p className="text-body-lg">
            Princípios que guiam cada decisão de produto, cada linha de código e cada conversa com escolas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-elevated relative overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 honey-gradient" />
              <span className="text-sm font-bold text-honey-dark mb-2 block">0{i + 1}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{belief.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{belief.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;

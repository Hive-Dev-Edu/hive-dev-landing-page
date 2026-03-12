import { motion } from "framer-motion";

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
              O que nos diferencia
            </span>
            <h2 className="heading-section mb-6">
              Nosso diferencial não é só tecnologia.{" "}
              <span className="honey-gradient-text">É postura.</span>
            </h2>
            <p className="text-body-lg max-w-2xl mx-auto">
              Nossas ferramentas ajudam a enxergar, organizar e agir — mas preservam
              vínculo, mediação e sentido. Construímos tecnologia que respeita a complexidade de aprender.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Construção pedagógica, não apenas técnica", text: "Cada funcionalidade nasce de uma pergunta educacional, não de uma tendência de mercado." },
              { title: "Dados com contexto, não ranking", text: "Informações que apoiam decisões humanas, nunca que rotulam ou constrangem." },
              { title: "Cooperação como motor", text: "Estudantes aprendem mais quando se ajudam. Isso é design, não acidente." },
              { title: "Escuta contínua", text: "Cada escola é diferente. Nosso produto evolui com as necessidades de quem usa." },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-elevated"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

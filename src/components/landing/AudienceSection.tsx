import { motion } from "framer-motion";
import { User, BookOpen, Settings, School } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Estudantes",
    text: "Que querem escrever melhor, receber devolutivas reais e aprender com a prática — não apenas com notas.",
  },
  {
    icon: BookOpen,
    title: "Professores",
    text: "Que buscam ferramentas que ampliem sua mediação, sem substituí-la por automações frias.",
  },
  {
    icon: Settings,
    title: "Gestores",
    text: "Que precisam de dados com contexto para tomar decisões, orientar equipes e acompanhar resultados com humanidade.",
  },
  {
    icon: School,
    title: "Comunidade escolar",
    text: "Redes e escolas que querem melhorar de verdade, sem simplificar demais a complexidade de aprender e ensinar.",
  },
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
            Para quem é
          </span>
          <h2 className="heading-section mb-4">
            Para quem acredita que a escola pode mais
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon size={22} className="text-honey-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

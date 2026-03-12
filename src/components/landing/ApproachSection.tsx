import { motion } from "framer-motion";
import { GraduationCap, Users, BarChart3, Monitor } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const layers = [
  {
    icon: GraduationCap,
    title: "Experiência prática para o estudante",
    text: "O estudante escreve, revisa, recebe devolutivas e aprende com a prática — não apenas com instruções teóricas.",
  },
  {
    icon: Users,
    title: "Mediação docente",
    text: "O professor acompanha, intervém e orienta com base em evidências, sem se perder em planilhas ou tarefas burocráticas.",
  },
  {
    icon: BarChart3,
    title: "Dados interpretáveis",
    text: "Informações claras que ajudam gestores a tomar decisões com contexto — dados que contam histórias, não apenas números.",
  },
];

const ApproachSection = () => {
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
            Como trabalhamos
          </span>
          <h2 className="heading-section mb-4">
            Tecnologia + Pedagogia + Cuidado
          </h2>
          <p className="text-body-lg">
            Nossas soluções combinam três camadas inseparáveis. Não desumanizamos a aprendizagem
            e não transformamos educação em ranking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-3 lg:grid-cols-1 gap-5">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-elevated flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl honey-gradient flex items-center justify-center shrink-0">
                  <layer.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{layer.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{layer.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <ImagePlaceholder
              label="Fluxo de trabalho na plataforma"
              sublabel="Estudante → Professor → Gestor"
              aspectRatio="aspect-[3/4]"
              icon={<Monitor size={22} className="text-honey-dark" />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

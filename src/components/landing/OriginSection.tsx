import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Heart, Camera } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const OriginSection = () => {
  return (
    <section id="origem" className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
              Origem e propósito
            </span>
            <h2 className="heading-section mb-6">
              Da pesquisa acadêmica para a sala de aula
            </h2>
            <p className="text-body-lg">
              A Hive.Dev nasce de investigações sobre escrita, aprendizagem e mediação pedagógica.
              Surgiu da percepção de que a melhoria real acontece quando há prática,
              retorno qualificado e apoio coletivo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ImagePlaceholder
              label="Contexto acadêmico e pesquisa"
              sublabel="Da universidade para a escola"
              aspectRatio="aspect-[4/3]"
              icon={<Camera size={22} className="text-honey-dark" />}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Pesquisa acadêmica",
              text: "Nossas soluções nascem de anos de investigação sobre como estudantes aprendem a escrever e como professores podem avaliar com mais sentido.",
            },
            {
              icon: Lightbulb,
              title: "Percepção prática",
              text: "Entendemos que melhoria real não vem de diagnósticos automáticos, mas de prática contínua, devolutivas humanas e apoio institucional.",
            },
            {
              icon: Heart,
              title: "Tese da marca",
              text: "Boas ferramentas não substituem o encontro humano — elas fortalecem o que a escola já faz de melhor: cuidar, mediar e transformar.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated"
            >
              <div className="w-12 h-12 rounded-xl honey-gradient flex items-center justify-center mb-5">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;

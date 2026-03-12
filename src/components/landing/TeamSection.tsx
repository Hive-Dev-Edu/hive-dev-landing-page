import { motion } from "framer-motion";
import { Users, Camera } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const teamMembers = [
  { label: "Membro da equipe", role: "Fundador(a)" },
  { label: "Membro da equipe", role: "Pedagógico" },
  { label: "Membro da equipe", role: "Tecnologia" },
  { label: "Membro da equipe", role: "Design" },
];

const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl honey-gradient flex items-center justify-center mx-auto mb-6">
              <Users size={30} className="text-primary-foreground" />
            </div>
            <h2 className="heading-section mb-6">
              Uma empresa feita por gente da educação
            </h2>
            <p className="text-body-lg max-w-2xl mx-auto mb-4">
              A Hive.Dev é formada por pessoas que já estiveram dos dois lados — como alunos e como
              professores. Conhecemos as dores, as esperanças e os limites da sala de aula.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Por isso, nosso compromisso é com escuta, ajuste e evolução contínua do produto.
              Cada decisão reflete empatia, responsabilidade e vontade genuína de fazer melhor.
            </p>
          </motion.div>

          {/* Main team photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <ImagePlaceholder
              label="Foto principal da equipe Hive.Dev"
              sublabel="Ambiente aberto, luz natural, equipe reunida"
              aspectRatio="aspect-[21/9]"
              icon={<Camera size={24} className="text-honey-dark" />}
            />
          </motion.div>

          {/* Individual team members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ImagePlaceholder
                  label={member.label}
                  sublabel={member.role}
                  aspectRatio="aspect-[3/4]"
                  icon={<Camera size={16} className="text-honey-dark" />}
                />
                <p className="text-xs text-muted-foreground text-center mt-2 italic">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Work moments */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
            >
              <ImagePlaceholder
                label="Momento de trabalho"
                sublabel="Colaboração e planejamento"
                aspectRatio="aspect-video"
                icon={<Camera size={18} className="text-honey-dark" />}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <ImagePlaceholder
                label="Momento de trabalho"
                sublabel="Discussão pedagógica"
                aspectRatio="aspect-video"
                icon={<Camera size={18} className="text-honey-dark" />}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

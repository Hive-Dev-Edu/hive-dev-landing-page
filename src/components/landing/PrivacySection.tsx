import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileCheck, UserCheck } from "lucide-react";

const items = [
  { icon: FileCheck, title: "Finalidade explícita", text: "Cada dado coletado tem propósito claro e declarado." },
  { icon: Eye, title: "Minimização de dados", text: "Coletamos apenas o necessário, nada além." },
  { icon: Shield, title: "Transparência", text: "Você sabe o que coletamos, por quê e como usamos." },
  { icon: Lock, title: "Segurança e controle", text: "Infraestrutura protegida e controle rigoroso de acesso." },
  { icon: UserCheck, title: "Cuidado com acesso interno", text: "Acesso restrito e monitorado, com responsabilidade clara." },
];

const PrivacySection = () => {
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
            LGPD e privacidade
          </span>
          <h2 className="heading-section mb-6">
            Privacidade não é obrigação jurídica. É compromisso ético.
          </h2>
          <p className="text-body-lg">
            Dados servem para apoiar intervenções humanas e melhorar processos —
            nunca para rotular ou constranger estudantes e professores.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`card-elevated ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <item.icon size={22} className="text-honey-dark mb-3" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;

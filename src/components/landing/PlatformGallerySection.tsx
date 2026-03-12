import { motion } from "framer-motion";
import { Layout, BarChart3, FileText, Users } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const screens = [
  { label: "Tela de escrita colaborativa", sublabel: "Corrige.me", icon: <FileText size={18} className="text-honey-dark" />, span: "lg:col-span-2" },
  { label: "Dashboard do gestor", sublabel: "Gabarito.pro", icon: <BarChart3 size={18} className="text-honey-dark" />, span: "" },
  { label: "Painel de devolutivas", sublabel: "Corrige.me", icon: <Users size={18} className="text-honey-dark" />, span: "" },
  { label: "Relatório de desempenho", sublabel: "Gabarito.pro", icon: <Layout size={18} className="text-honey-dark" />, span: "lg:col-span-2" },
];

const PlatformGallerySection = () => {
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
            Na prática
          </span>
          <h2 className="heading-section mb-4">
            Interfaces pensadas para o cotidiano escolar
          </h2>
          <p className="text-body-lg">
            Cada tela foi desenhada para tornar o dia a dia de quem ensina e aprende mais fluido, claro e significativo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={screen.span}
            >
              <div className="rounded-2xl border border-border bg-card shadow-md overflow-hidden h-full">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-secondary/50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                    <div className="w-2 h-2 rounded-full bg-border" />
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-2">{screen.sublabel?.toLowerCase().replace('.', '')}</span>
                </div>
                <ImagePlaceholder
                  label={screen.label}
                  sublabel={screen.sublabel}
                  aspectRatio="aspect-[16/9]"
                  className="rounded-none border-0"
                  icon={screen.icon}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformGallerySection;

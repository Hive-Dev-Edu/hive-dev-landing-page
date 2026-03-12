import { motion } from "framer-motion";
import { PenTool, ClipboardCheck, ArrowRight, Monitor } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
            Nossas soluções
          </span>
          <h2 className="heading-section mb-4">
            Plataformas que nascem de perguntas reais da escola
          </h2>
          <p className="text-body-lg">
            Dois produtos complementares, construídos com rigor pedagógico e respeito ao dia a dia de quem ensina e aprende.
          </p>
        </motion.div>

        {/* Corrige.me - Text left, Image right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card-elevated relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 honey-gradient" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Text content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl honey-gradient flex items-center justify-center">
                  <PenTool size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Corrige.me</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                A escrita melhora com prática, retorno e comunidade. O Corrige.me é uma plataforma
                em que estudantes se ajudam a escrever melhor, com devolutivas práticas e humanizadas,
                além de mediação de professores e gestores.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Aprendizagem pela prática — escrever, revisar, receber e dar devolutivas",
                  "Cooperação orientada — estudantes aprendem uns com os outros",
                  "Indicadores que apoiam intervenções pedagógicas reais",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-honey-dark hover:underline"
              >
                Conhecer o Corrige.me <ArrowRight size={16} />
              </a>
            </div>

            {/* Screenshots */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-secondary/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-2">corrige.me</span>
                </div>
                <ImagePlaceholder
                  label="Print principal do Corrige.me"
                  sublabel="Tela de correção colaborativa"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-none border-0"
                  icon={<Monitor size={20} className="text-honey-dark" />}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Devolutiva do estudante", "Painel do professor", "Indicadores"].map((label, i) => (
                  <ImagePlaceholder
                    key={i}
                    label={label}
                    aspectRatio="aspect-square"
                    className="text-[10px]"
                    icon={<Monitor size={14} className="text-honey-dark" />}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gabarito.pro - Image left, Text right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 honey-gradient" />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Screenshots - first on desktop */}
            <div className="flex flex-col gap-4 lg:order-1 order-2">
              <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-secondary/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-2">gabarito.pro</span>
                </div>
                <ImagePlaceholder
                  label="Print principal do Gabarito.pro"
                  sublabel="Dashboard de avaliações"
                  aspectRatio="aspect-[16/10]"
                  className="rounded-none border-0"
                  icon={<Monitor size={20} className="text-honey-dark" />}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Criação de prova", "Correção", "Relatório pedagógico"].map((label, i) => (
                  <ImagePlaceholder
                    key={i}
                    label={label}
                    aspectRatio="aspect-square"
                    className="text-[10px]"
                    icon={<Monitor size={14} className="text-honey-dark" />}
                  />
                ))}
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center lg:order-2 order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl honey-gradient flex items-center justify-center">
                  <ClipboardCheck size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Gabarito.pro</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Avaliar pode ser rápido e também inteligente e pedagógico. O Gabarito.pro é uma plataforma
                de elaboração, correção e gestão de provas que transforma resultados em leitura pedagógica
                para apoiar ações concretas na escola.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Criação e gestão de avaliações com fluidez",
                  "Correção eficiente com controle e revisão",
                  "Interpretação de dados para orientar intervenções",
                  "Relatórios com contexto — não apenas números soltos",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-honey-dark hover:underline"
              >
                Conhecer o Gabarito.pro <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;

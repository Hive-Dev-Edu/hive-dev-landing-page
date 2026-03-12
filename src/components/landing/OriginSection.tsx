import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Heart, Camera } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const originItems = [
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
];

const OriginSection = () => {
  return (
    <section
      id="origem"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-amber-50/40 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 4, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 h-[280px] w-[280px] rounded-[70px] bg-gradient-to-br from-orange-300/15 via-amber-200/15 to-transparent blur-3xl md:h-[420px] md:w-[420px]"
        />

        <motion.div
          animate={{ x: [0, 16, 0], y: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/3 h-[260px] w-[260px] rounded-[44%_56%_58%_42%_/_40%_42%_58%_60%] bg-gradient-to-r from-amber-300/15 via-orange-200/10 to-transparent blur-3xl md:h-[380px] md:w-[380px]"
        />

        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[12%] h-[140px] w-[140px] rounded-full border border-orange-300/25 md:h-[220px] md:w-[220px]"
        />

        <motion.div
          animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-40px] right-1/4 h-[160px] w-[240px] rounded-[50%_50%_45%_55%_/_55%_45%_50%_50%] bg-gradient-to-r from-orange-200/15 via-amber-100/10 to-transparent blur-3xl md:h-[220px] md:w-[340px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 md:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">
              Origem e propósito
            </span>

            <h2 className="heading-section mb-6 max-w-2xl">
              Da pesquisa acadêmica para a sala de aula
            </h2>

            <p className="text-body-lg max-w-2xl">
              A Hive.Dev nasce de investigações sobre escrita, aprendizagem e
              mediação pedagógica. Surgiu da percepção de que a melhoria real
              acontece quando há prática, retorno qualificado e apoio coletivo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white/90 shadow-[0_20px_60px_-20px_rgba(249,115,22,0.18)] backdrop-blur-sm">
              <ImagePlaceholder
                label="Contexto acadêmico e pesquisa"
                sublabel="Da universidade para a escola"
                aspectRatio="aspect-[4/3]"
                className="rounded-none border-0"
                icon={<Camera size={22} className="text-orange-700" />}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {originItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-orange-100 bg-white/85 p-6 shadow-[0_16px_40px_-24px_rgba(249,115,22,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-md shadow-orange-200/40">
                <item.icon size={22} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-relaxed text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
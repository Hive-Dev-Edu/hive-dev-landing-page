import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Monitor, Smartphone } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 6, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-[80px] bg-gradient-to-br from-orange-300/20 via-amber-200/20 to-transparent blur-3xl md:h-[560px] md:w-[560px]"
        />

        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, 28, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-[44%_56%_58%_42%_/_40%_42%_58%_60%] bg-gradient-to-r from-amber-300/20 via-orange-200/15 to-transparent blur-3xl md:h-[460px] md:w-[460px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            rotate: [0, -4, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-120px] left-[18%] h-[260px] w-[260px] rounded-[56px] bg-gradient-to-tr from-orange-200/20 via-amber-100/15 to-transparent blur-3xl md:h-[360px] md:w-[360px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[10%] h-[170px] w-[170px] rounded-full border border-orange-300/30 md:h-[260px] md:w-[260px]"
        />

        <motion.div
          animate={{
            y: [-12, 18, -12],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[6%] top-[50%] h-[150px] w-[220px] rounded-[42px] bg-gradient-to-bl from-orange-300/15 via-amber-200/10 to-transparent blur-2xl md:h-[220px] md:w-[320px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -left-16 h-[220px] w-[220px] rounded-full border border-amber-300/25 md:h-[320px] md:w-[320px]"
        />

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[8%] h-[120px] w-[120px] rounded-[60%_40%_35%_65%_/_60%_35%_65%_40%] bg-gradient-to-br from-amber-300/20 to-transparent blur-2xl md:h-[180px] md:w-[180px]"
        />

        <motion.div
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-50px] right-1/4 h-[180px] w-[280px] rounded-[50%_50%_45%_55%_/_55%_45%_50%_50%] bg-gradient-to-r from-orange-200/15 via-amber-100/10 to-transparent blur-3xl md:h-[240px] md:w-[400px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/20 md:h-[250px] md:w-[250px]"
        />
      </div>

      <div className="section-container relative z-10 py-16 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <span className="text-sm font-medium text-gray-900">
                Tecnologia educacional com propósito
              </span>
            </div>

            <h1 className="heading-display mb-4 max-w-3xl">
              Tecnologia educacional nascida da pesquisa —{" "}
              <span className="honey-gradient-text">
                para fortalecer o humano na escola.
              </span>
            </h1>

            <p className="text-body-lg mb-10 max-w-2xl">
              A Hive.Dev cria plataformas que melhoram escrita e avaliação com
              colaboração, mediação pedagógica e dados a serviço de intervenções
              reais — sem reduzir pessoas a métricas.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#origem"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Conhecer a Hive.Dev
                <ArrowRight size={18} />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-200 bg-white/80 px-7 py-3.5 text-base font-semibold text-gray-900 shadow-sm backdrop-blur-sm transition-colors hover:bg-orange-50"
              >
                <MessageCircle size={18} />
                Falar com a equipe
              </a>
            </div>

            <p className="border-l-2 border-orange-400/40 pl-4 text-sm font-medium italic text-gray-500">
              Menos automação vazia. Mais vínculo, autonomia e melhoria
              contínua.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white/90 shadow-[0_20px_60px_-20px_rgba(249,115,22,0.22)] backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-orange-100 bg-orange-50/70 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-orange-200" />
                    <div className="h-3 w-3 rounded-full bg-amber-200" />
                    <div className="h-3 w-3 rounded-full bg-yellow-200" />
                  </div>

                  <div className="mx-4 flex-1">
                    <div className="flex h-6 items-center justify-center rounded-md bg-white/80">
                      <span className="text-[10px] text-gray-500">
                        hive.dev/plataforma
                      </span>
                    </div>
                  </div>
                </div>

                <ImagePlaceholder
                  label="Composição visual da plataforma Hive.Dev"
                  sublabel="Interfaces"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-none border-0"
                  icon={<Monitor size={22} className="text-orange-700" />}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-4 w-24 md:-left-6 md:w-36"
              >
                <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white/95 shadow-lg">
                  <div className="flex items-center justify-center border-b border-orange-100 bg-orange-50/70 py-1.5">
                    <div className="h-1 w-8 rounded-full bg-orange-200" />
                  </div>

                  <ImagePlaceholder
                    label="Mobile"
                    aspectRatio="aspect-[9/16]"
                    className="rounded-none border-0"
                    icon={<Smartphone size={14} className="text-orange-700" />}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
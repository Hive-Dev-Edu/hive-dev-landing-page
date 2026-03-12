import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

const photos = [
  { label: "Estudantes escrevendo", sublabel: "Concentração e prática", span: "md:col-span-2 md:row-span-2" },
  { label: "Professor acompanhando", sublabel: "Mediação em ação", span: "" },
  { label: "Colaboração entre alunos", sublabel: "Aprendizagem coletiva", span: "" },
  { label: "Ambiente escolar", sublabel: "Espaço de aprendizagem", span: "md:col-span-2" },
];

const ContextPhotoSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-honey-dark mb-4 block">
            Tecnologia e humanidade
          </span>
          <h2 className="heading-section mb-4">
            Onde a tecnologia encontra a sala de aula
          </h2>
          <p className="text-body-lg">
            Nossas plataformas vivem no dia a dia das escolas — entre cadernos, conversas e decisões pedagógicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={photo.span}
            >
              <ImagePlaceholder
                label={photo.label}
                sublabel={photo.sublabel}
                aspectRatio={i === 0 ? "aspect-square" : "aspect-video"}
                className="h-full"
                icon={<Camera size={18} className="text-honey-dark" />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextPhotoSection;

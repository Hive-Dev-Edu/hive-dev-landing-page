import { motion } from "framer-motion";

const ManifestoSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 honey-gradient opacity-[0.07]" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-foreground mb-8">
            "Tecnologia educacional não deve{" "}
            <span className="honey-gradient-text">desumanizar a escola.</span>"
          </h2>
          <p className="text-body-lg max-w-xl mx-auto">
            Nossas plataformas existem para ampliar o cuidado, a cooperação e a inteligência pedagógica.
            Porque aprender é humano — e educar também.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;

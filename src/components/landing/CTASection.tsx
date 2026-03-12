import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-section mb-6">
            Vamos conversar sobre possibilidades?
          </h2>
          <p className="text-body-lg mb-10">
            Convidamos escolas e redes a conhecer possibilidades de implantação, parceria e pilotos.
          </p>

          <a
            href="mailto:contato@hive.dev"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full honey-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={22} />
            Conversar com a Hive.Dev
          </a>

          <p className="text-sm text-muted-foreground mt-6 italic">
            Responderemos com caminhos e possibilidades — não com empurrão comercial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

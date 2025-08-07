import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-50">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes Somos?
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Con presencia nacional e internacional, somos especialistas en análisis de riesgos,
        prevención de pérdidas y ajustes de seguros. Nuestro equipo está compuesto por expertos
        en cada rama de la industria, comprometidos con la precisión, la ética y la calidad.
      </motion.p>

      <motion.div
        className="flex justify-center items-center flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src="src/assets/logos/IILA.png"
          alt="International Institute of Loss Adjusters"
          className="h-50 md:h-50 object-contain"
        />
        <p className="text-sm text-gray-600 italic max-w-md mx-auto">
          Miembros del International Institute of Loss Adjusters (IILA), organización global con sede en Ottawa, Canadá.
        </p>
      </motion.div>
    </section>
  )
}

export default About

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        className="z-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          ETICA AJUSTADORES
        </h1>
        <p className="text-xl md:text-2xl mt-4 drop-shadow">
          27 años trabajando para usted
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Contáctanos
        </a>
      </motion.div>
    </section>
  )
}

export default Hero

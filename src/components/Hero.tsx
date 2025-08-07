
import { motion } from "framer-motion"
import headerImg from "../assets/header.png"

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        className="z-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-9xl md:text-9xl font-extrabold leading-tight drop-shadow-lg">
          ETICA
        </h1>
        <br />
        <p className="text-xl sm:text-4xl md:text-4xl mt-4 drop-shadow">
          AJUSTADORES DE SEGUROS
        </p>
        <br />
        <br />
        <p className="text-xl md:text-2xl mt-4 italic drop-shadow">
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


import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import headerImg from "../assets/EticaPortrait.png"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <motion.section
      className="relative flex items-center justify-center text-white text-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 400%', // Recortar 15% desde arriba
        backgroundRepeat: 'no-repeat',
        height: isMobile ? '50vh' : '100vh',
        minHeight: isMobile ? '400px' : '100vh'
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <motion.div
          className="absolute"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{
            left: 0, // Cambiar de '5%' a 0 para que llegue al borde izquierdo
            bottom: '35%',
            transform: 'translateY(0)',
            textAlign: 'left',
            maxWidth: isMobile ? '85%' : '45%', // Aumentar ligeramente el ancho para compensar
            backgroundColor: 'rgba(255, 255, 255, 0.75)', // Fondo blanco con 50% de transparencia
            padding: '20px 20px 20px 5%', // Padding diferenciado: más espacio a la izquierda desde el borde
            borderRadius: '0 10px 10px 0' // Solo esquinas redondeadas a la derecha
          }}
        >
          <motion.h1
            className="text-5xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
            style={{ color: "#006EC0" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            ETICA
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl font-extrabold leading-tight drop-shadow-lg mt-2"
            style={{ color: "#006EC0" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            AJUSTADORES DE SEGUROS
          </motion.h2>
          <br />
          <motion.p
            className="text-xl md:text-2xl mt-4 italic drop-shadow text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            "28 años trabajando para usted"
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

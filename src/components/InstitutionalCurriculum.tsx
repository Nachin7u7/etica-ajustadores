import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const InstitutionalCurriculum = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Título Principal */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 relative">
            Currículum Institucional
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de 28 años de experiencia respaldando a nuestros clientes con certificaciones internacionales
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Reconocimiento Oficial */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-l-8 border-blue-600 hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Reconocimiento Oficial</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    En el campo de los Servicios Auxiliares de Seguros, <span className="font-semibold text-blue-800">ETICA AJUSTADORES DE SEGURO</span> está registrada en el Registro Ajustadores y Liquidadores de Seguro de la Autoridad de Fiscalización y Control de Pensiones y Seguros – APS.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                    <p className="font-semibold text-blue-800">
                      Resolución Administrativa No. 072/97 del 9 de Octubre de 1997, Registro No. 15-97-AL
                    </p>
                  </div>
                  <p className="text-lg">
                    De acuerdo con el <span className="font-semibold text-green-700">Certificado de Registro No. 001/024 del 3 de Junio de 2024</span>, la Autoridad mencionada anteriormente certificó nuestro actual registro de Ajustador de Seguros.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Corresponsalías */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-l-8 border-green-600 hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-green-900 mb-6">Corresponsalías Internacionales</h3>

                <div className="space-y-8">
                  {/* I.I.L.A. */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">International Institute of Loss Adjusters (I.I.L.A.)</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Somos miembros del <span className="font-semibold">Instituto Internacional de Ajustadores de Seguros</span> – Organización internacional con sede principal en <span className="font-semibold text-blue-700">Ottawa, Canadá</span>.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Asia</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">África</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">América del Norte</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Sudamérica</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Europa</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Australia</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Especializado en servicios de transporte para embarques de mercancías de importación/exportación hacia/desde cualquier parte del mundo.
                    </p>
                  </div>

                  {/* FRADJUSTING */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-purple-800 mb-3">FRADJUSTING INTERNATIONAL LOSS ADJUSTERS LTD.</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Nuestra Firma es Corresponsal para <span className="font-semibold text-purple-700">Bolivia, Perú y Chile</span> con sede en <span className="font-semibold">Harbour City, Hong Kong</span>.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Ajustadores de Reaseguradores para el mercado internacional, especializado en Japón, China y países del Sud Este Asiático con inversiones en el área de energía.
                    </p>
                  </div>

                  {/* N.F.P.A. */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-orange-800 mb-3">National Fire Protection Association (N.F.P.A.)</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Somos miembros de esta entidad de <span className="font-semibold text-orange-700">Estados Unidos</span>, reconocida internacionalmente y especializada en estándares universales de administración de riesgo, cuyos estándares son utilizados por nuestra firma en el análisis de riesgos.
                    </p>
                  </div>

                  {/* M3 Aviation */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-cyan-800 mb-3">M3 AVIATION SERVICE</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Somos corresponsales de esta firma de <span className="font-semibold text-cyan-700">Miami, Florida</span>, especializada en manejo de reclamos de aviación para accidentes e incidentes de aeronavegación.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Provee servicios técnicos, asesoría y valuaciones globales para Aseguradores, Instituciones Financieras, Firmas legales y Compañías de leasing en la Región Latinoamericana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sello de Experiencia */}
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl mb-6">
              <span className="text-4xl font-bold text-white">28</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Años de Experiencia</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respaldados por certificaciones internacionales y una red global de corresponsalías
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstitutionalCurriculum

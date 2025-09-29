import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const sectors = [
    {
      title: "Energía y Electricidad",
      companies: [
        "ENTEL S.A.", "ELFEC", "Valle Hermoso S.A.",
        "Empresa Eléctrica Guarachi", "TDE S.A.", "SEPSA",
        "ENDE Andina S.A.", "Empresa Eléctrica Corani"
      ],
      icon: "⚡",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Petróleo y Gas",
      companies: [
        "YPFB", "YPFB Refinación S.A.", "CLHB",
        "Transredes S.A.", "Gas y Electricidad S.A."
      ],
      icon: "🛢️",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Cemento y Construcción",
      companies: [
        "SOBOCE", "COBOCE", "FANCESA",
        "Proyecto Múltiple San Jacinto", "Proyecto Múltiple Misicuni"
      ],
      icon: "🏗️",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Sector Financiero",
      companies: [
        "Banco Central de Bolivia", "Banco BISA",
        "Banco Mercantil", "Banco Los Andes", "ProCredit", "Prodem"
      ],
      icon: "🏦",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Telecomunicaciones",
      companies: [
        "COMTECO", "COTAP", "COTES", "COTEL"
      ],
      icon: "📡",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Industria Alimentaria",
      companies: [
        "Cervecería Boliviana Nacional", "PIL",
        "Grupo Pepsi", "Cristembo S.A.", "Compañía Molinera Coronilla"
      ],
      icon: "🏭",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Minería",
      companies: [
        "Minera San Cristóbal", "Mina Colquiri",
        "Mina San Vicente", "EMBAS", "Yacimientos de Litio Boliviano YLB"
      ],
      icon: "⛏️",
      color: "from-[#006EC0] to-blue-600"
    },
    {
      title: "Servicios Públicos",
      companies: [
        "SEMAPA", "ELAPAS", "Grupo Univalle"
      ],
      icon: "🏢",
      color: "from-[#006EC0] to-blue-600"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Título Principal */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#006EC0] mb-6 relative">
            Experiencia Comprobada
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006EC0] rounded-full mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            25 años realizando informes de riesgos de ingeniería para las empresas más importantes de Bolivia
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl font-bold text-[#006EC0] mb-2">25+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl font-bold text-[#006EC0] mb-2">50+</div>
            <div className="text-gray-600">Empresas Atendidas</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl font-bold text-[#006EC0] mb-2">8</div>
            <div className="text-gray-600">Sectores Industriales</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl font-bold text-[#006EC0] mb-2">100%</div>
            <div className="text-gray-600">Confiabilidad</div>
          </motion.div>
        </motion.div>

        {/* Sectores */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-[#006EC0]"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${sector.color} p-4 text-white`}>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{sector.icon}</span>
                  <h3 className="text-lg font-bold leading-tight">{sector.title}</h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <div className="space-y-2">
                  {sector.companies.slice(0, 4).map((company, companyIndex) => (
                    <div key={companyIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#006EC0] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 truncate">{company}</span>
                    </div>
                  ))}
                  {sector.companies.length > 4 && (
                    <div className="text-xs text-gray-400 italic">
                      +{sector.companies.length - 4} más...
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empresas Destacadas */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-[#006EC0] text-center mb-8">
            Clientes Destacados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "SOBOCE", "ENTEL", "YPFB", "BCB", "ELFEC", "BISA",
              "COBOCE", "PIL", "TDE", "MERCANTIL", "San Cristóbal", "UNIVALLE"
            ].map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#006EC0]/10 to-blue-100/50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm font-semibold text-[#006EC0]">{company}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mensaje Final */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#006EC0] to-blue-600 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Trayectoria de Excelencia</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Durante 25 años hemos desarrollado informes de riesgos de ingeniería para las empresas más importantes
            de Bolivia, abarcando desde el sector energético hasta la minería, consolidándonos como referentes
            en análisis de riesgos industriales.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Team

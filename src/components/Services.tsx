import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
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

  const services = [
    {
      title: "Análisis de Riesgos",
      description: "Utilizamos las últimas técnicas y software aprobado para identificar y evaluar riesgos en industrias petroquímicas, energía eléctrica y térmica.",
      features: [
        "Incendio y Aliados",
        "Peligros de la naturaleza",
        "Maquinaria y Calderos",
        "Equipo electrónico",
        "CAR/EAR",
        "Interrupción de producción",
        "Responsabilidad Civil"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Valorizaciones",
      description: "Servicios de evaluaciones con métodos rigurosos y auditables, manteniendo estrictos acuerdos de confidencialidad para diversos propósitos.",
      features: [
        "Evaluaciones para Contabilidad y Auditoría",
        "Evaluaciones para propósitos Bancarios",
        "Evaluaciones para propósitos de Seguro"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Ajuste de Pérdidas",
      description: "Realizamos ajustes de pérdidas y reportes de daños con opinión experta, especializándonos en energía y petróleo.",
      features: [
        "Incendio y Aliados",
        "Rotura de Maquinaria",
        "Equipo Electrónico",
        "CAR/EAR",
        "Pérdida de Beneficios",
        "Responsabilidad Civil",
        "Fidelidad de Empleados",
        "Seguro de Transportes"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Servicios Especializados",
      description: "Investigación, inspecciones y liquidación de siniestros en diversos campos especializados con gran experiencia comprobada.",
      features: [
        "Transporte (Marítimo, Aéreo y Terrestre)",
        "Riesgos de Incendio y Aliados",
        "Pólizas de Banqueros",
        "Ramos Técnicos y de Ingeniería",
        "Interrupción de Negocios",
        "Todo Riesgo Montaje y Construcción",
        "Robo, atraco, asalto",
        "Recuperaciones y Salvatajes"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
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
            Nuestras Especialidades
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006EC0] rounded-full mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Servicios profesionales especializados con 28 años de experiencia en la industria de seguros
          </p>
        </motion.div>

        {/* Grid de Servicios */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden border-l-8 border-[#006EC0]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#006EC0] to-blue-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/80 text-sm">Servicio Profesional</p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-6">
                {/* Descripción */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Lista de características */}
                <div>
                  <h4 className="text-lg font-bold text-[#006EC0] mb-4">Áreas de Especialización:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#006EC0] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer con badge */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="bg-[#006EC0]/10 text-[#006EC0] px-4 py-2 rounded-full text-sm font-medium">
                    Servicio Especializado
                  </span>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">28 años de</p>
                    <p className="text-sm font-bold text-[#006EC0]">Experiencia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#006EC0] mb-4">Compromiso con la Excelencia</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestros reportes incluyen análisis de reducción concreta del riesgo, recomendaciones
            detalladas y estimaciones de pérdida máxima. Trabajamos con bancos, aseguradores,
            reaseguradores, corredores de seguros y firmas industriales y comerciales.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006EC0]">28+</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006EC0]">4</div>
              <div className="text-sm text-gray-600">Servicios Principales</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006EC0]">100%</div>
              <div className="text-sm text-gray-600">Profesionalismo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

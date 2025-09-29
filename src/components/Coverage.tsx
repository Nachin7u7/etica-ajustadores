import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Coverage = () => {
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

  const offices = [
    {
      city: "La Paz",
      address: "V. Costanera – Calacoto Edificio Danubio",
      floor: "Primer Piso Of 102",
      phone: "774 46015",
      manager: "Ing. Pedro Sauma Muñoz"
    },
    {
      city: "Cochabamba",
      address: "C. 25 de Mayo esquina Colombia. Edificio Santa Clara",
      floor: "Piso 2 Of 5",
      phone: "4-4460174 / 4-4460185",
      mobile: "64830872",
      manager: "Ing. Enrique Sauma Band"
    },
    {
      city: "Santa Cruz",
      address: "Av Ibérica No.20 Barrio Las Palmas",
      phone: "76547551",
      manager: "Ing. Ximena Medrano Sauma"
    },
    {
      city: "Sucre",
      address: "Calle España No. 33",
      mobile: "60174298"
    },
    {
      city: "Tarija",
      address: "Calle La Madrid 0443",
      phone: "71863950",
      manager: "Sr. Manuel Durán Saavedra"
    }
  ]

  // Colores unificados usando #006EC0
  const cardColors = {
    bg: "bg-[#006EC0]",
    border: "border-[#006EC0]",
    text: "text-[#006EC0]",
    bgLight: "bg-[#006EC0]/10"
  }

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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nuestras Oficinas
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Presencia nacional con oficinas estratégicamente ubicadas en las principales ciudades de Bolivia
          </p>
        </motion.div>

        {/* Grid de Oficinas */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offices.map((office) => {
            return (
              <motion.div
                key={office.city}
                variants={itemVariants}
                className="relative group"
              >
                <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-t-4 ${cardColors.border} transform hover:-translate-y-2`}>
                  {/* Header con ciudad */}
                  <div className={`${cardColors.bg} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{office.city}</h3>
                        <p className="text-white/80 text-sm">Oficina Principal</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 space-y-4">
                    {/* Dirección */}
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full ${cardColors.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">{office.address}</p>
                        {office.floor && (
                          <p className="text-gray-500 text-sm">{office.floor}</p>
                        )}
                      </div>
                    </div>

                    {/* Teléfonos */}
                    <div className="space-y-2">
                      {office.phone && (
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full ${cardColors.bg} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">Teléfono</p>
                            <p className={`text-sm font-mono ${cardColors.text}`}>{office.phone}</p>
                          </div>
                        </div>
                      )}

                      {office.mobile && (
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full ${cardColors.bg} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">Celular</p>
                            <p className={`text-sm font-mono ${cardColors.text}`}>{office.mobile}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Jefe de Oficina */}
                    {office.manager && (
                      <div className={`${cardColors.bgLight} rounded-xl p-4 border-l-4 ${cardColors.border}`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full ${cardColors.bg} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-600 text-sm font-medium">Jefe de Oficina</p>
                            <p className={`font-semibold ${cardColors.text}`}>{office.manager}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Efecto hover decorativo */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${cardColors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer con información adicional */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Cobertura Nacional</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Con presencia en las 5 ciudades principales de Bolivia, ofrecemos servicios de ajuste de seguros
            con la experiencia y profesionalismo que nos caracteriza desde 1997.
          </p>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="flex items-center space-x-2 text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">28 años de experiencia</span>
            </div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="font-semibold">5 oficinas nacionales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Coverage

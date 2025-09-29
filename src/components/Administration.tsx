import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Administration = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const education = [
    {
      title: "Ingeniería Eléctrica",
      institution: "Universidad Mayor de San Andrés, La Paz",
      year: "1982",
      type: "Licenciatura"
    },
    {
      title: "Economía",
      institution: "Universidad Mayor de San Simón, Cochabamba",
      year: "1992",
      type: "Licenciatura"
    },
    {
      title: "Administración y Finanzas Empresariales",
      institution: "Universidad Mayor de San Marcos, Lima, Perú",
      year: "1997",
      type: "Post Grado"
    }
  ]

  const certifications = [
    {
      title: "Perito en Seguros Generales e Ingeniería de Riesgos",
      institution: "Instituto de Seguros, Lima, Perú",
      organization: "Asociación Peruana de Empresas de Seguros",
      year: "1996"
    },
    {
      title: "Diplomado en Ajustes de Siniestros de Riesgos Generales",
      institution: "IBEE - Instituto Boliviano de Estudios Empresariales",
      year: "1990"
    },
    {
      title: "Diplomado en Seguro de Transportes",
      institution: "Agencia de Lloyd's of London, La Paz",
      year: "1980"
    }
  ]

  const memberships = [
    {
      organization: "International Institute of Loss Adjusters (I.I.L.A.)",
      location: "Ottawa, Canadá",
      description: "Institución de Ajustadores de Seguro a nivel mundial"
    },
    {
      organization: "National Fire Protection Association (N.F.P.A.)",
      location: "Estados Unidos",
      description: "Entidad que norma y dictamina los parámetros técnicos de tratamiento y gestión de Riesgos de Incendio y Riesgos Industriales"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Título Principal */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative">
            Administración
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#006EC0] rounded-full mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Liderazgo profesional con más de 40 años de experiencia en el sector de seguros
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Perfil del Director */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-l-8 border-[#006EC0] hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar y Info Principal */}
              <div className="flex-shrink-0 text-center lg:text-left mt-15">
                <h3 className="text-3xl font-bold text-[#006EC0] mb-2">
                  Pedro José Sauma Muñoz
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  Director General
                </p>
              </div>

              {/* Descripción */}
              <div className="flex-1">
                <div className="bg-gradient-to-r from-[#006EC0]/10 to-blue-100/50 p-6 rounded-2xl">
                  <h4 className="text-2xl font-bold text-[#006EC0] mb-4">Perfil Profesional</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Profesional altamente calificado con formación multidisciplinaria en Ingeniería y Economía,
                    especializado en ajustes de seguros y evaluación de riesgos. Con más de cuatro décadas de
                    experiencia, lidera ETICA Ajustadores de Seguros con reconocimiento internacional y
                    certificaciones de prestigiosas instituciones mundiales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formación Académica */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006EC0] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Formación Académica</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl border-l-4 border-[#006EC0] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-8 h-8 bg-[#006EC0] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{edu.year.slice(-2)}</span>
                    </div>
                    <div>
                      <span className="bg-[#006EC0]/10 text-[#006EC0] px-3 py-1 rounded-full text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#006EC0] mb-2">{edu.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-xs font-medium">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones Profesionales */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Certificaciones Profesionales</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                    <p className="text-gray-600 mb-1">{cert.institution}</p>
                    {cert.organization && (
                      <p className="text-gray-500 text-sm mb-2">{cert.organization}</p>
                    )}
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Membresías Internacionales */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Membresías Internacionales</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {memberships.map((membership, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-700 mb-2">{membership.organization}</h4>
                      <p className="text-purple-600 text-sm font-medium mb-2">{membership.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{membership.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Estadísticas de Experiencia */}
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006EC0] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">40+</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Años de Experiencia</h4>
                <p className="text-gray-600">En el sector de seguros y ajustes</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Certificaciones</h4>
                <p className="text-gray-600">Especializaciones internacionales</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Membresías</h4>
                <p className="text-gray-600">Organizaciones internacionales</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Administration

import { motion } from "framer-motion";
import iilaLogo from "../assets/logos/IILA.png";

const About = () => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-50">
      <motion.h2
        className="text-4xl font-bold mb-6 text-[#006EC0]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes Somos?
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Nuestra Empresa ofrece servicios a la Industria de Seguros: Compañías de Seguros, Corredores y Reaseguradores,
        presentando información precisa de acuerdo a las necesidades de cada institución.
      </motion.p>

      {/* Servicios y Especialidades */}
      <motion.div
        className="max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006EC0] hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#006EC0] to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#006EC0] mb-3">Análisis de Riesgos</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Especialistas en evaluación, prevención de pérdidas y ajustes de seguro con metodología profesional.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006EC0] hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#006EC0] to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#006EC0] mb-3">Equipo Interdisciplinario</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Profesionales con experiencia en cada rama de la industria, trabajando bajo los más altos estándares de calidad.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006EC0] hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#006EC0] to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#006EC0] mb-3">Reconocimiento Internacional</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Nuestros reportes son aceptados internacionalmente por el Mercado de Seguros mundial.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Descripción complementaria */}
      <motion.p
        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Con presencia nacional e internacional, mantenemos nuestro compromiso con la precisión,
        la ética y la excelencia en cada servicio que brindamos a nuestros clientes.
      </motion.p>

      <motion.div
        className="flex justify-center items-center flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src={iilaLogo}
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

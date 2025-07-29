const services = [
  "Análisis de Riesgos",
  "Valorizaciones Profesionales",
  "Ajuste de Pérdidas",
  "Inspecciones & Siniestros",
  "Servicio Internacional de Corresponsalías"
]

const Services = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Nuestros Servicios</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((srv, i) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-800">{srv}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

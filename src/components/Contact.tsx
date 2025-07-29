const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
      <p className="mb-6 text-gray-700">Estamos listos para ayudarte. Envíanos tu consulta:</p>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded border border-gray-300"
        />
        <textarea
          placeholder="Mensaje"
          rows={4}
          className="w-full p-3 rounded border border-gray-300"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default Contact

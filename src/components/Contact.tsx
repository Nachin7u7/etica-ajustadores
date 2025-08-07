import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_oyqt6s9";
const TEMPLATE_ID = "template_4ejbf97";
const USER_ID = "416la_nlo9L64rjDX";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.nombre,
          email: form.email,
          message: `Correo de contacto: ${form.email}\n\n${form.mensaje}`
        },
        USER_ID
      )
      .then(
        () => {
          setStatus("¡Mensaje enviado correctamente!");
          setForm({ nombre: "", email: "", mensaje: "" });
          setLoading(false);
        },
        () => {
          setStatus("Hubo un error al enviar el mensaje. Intenta de nuevo.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
      <p className="mb-6 text-gray-700">Estamos listos para ayudarte. Envíanos tu consulta:</p>
      <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="w-full p-3 rounded border border-gray-300"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="w-full p-3 rounded border border-gray-300"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={4}
          className="w-full p-3 rounded border border-gray-300"
          value={form.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default Contact

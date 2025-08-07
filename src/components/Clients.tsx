import { motion } from "framer-motion"

const clients = [
    { name: "YPFB", logo: "src/assets/logos/ypfb.png" },
    { name: "COTEL", logo: "src/assets/logos/cotel.png" },
    { name: "CBN", logo: "src/assets/logos/cbn.png" },
    { name: "PIL", logo: "src/assets/logos/pil.png" },
    { name: "ENTEL", logo: "src/assets/logos/entel.png" },
    { name: "Banco Central", logo: "src/assets/logos/bcb.png" },
    { name: "SOBOCE", logo: "src/assets/logos/soboce.png" },
    { name: "COBOCE", logo: "src/assets/logos/coboce.png" },
    { name: "BISA", logo: "src/assets/logos/bisa.png" },
    { name: "FANCESA", logo: "src/assets/logos/francesa.png" },
    { name: "MERCANTIL", logo: "src/assets/logos/mercantil.png" },
    { name: "PRODEM", logo: "src/assets/logos/prodem.png" },
]

const Clients = () => {
    return (
        <section className="py-20 px-6 bg-white text-center">
            <motion.h2
                className="text-4xl font-bold mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Nuestos Clientes
            </motion.h2>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto items-center"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                {clients.map((client, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="h-16 object-contain mx-auto"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Clients

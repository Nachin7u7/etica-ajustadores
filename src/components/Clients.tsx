import { motion } from "framer-motion";

import ypfb from "../assets/logos/ypfb.png";
import cotel from "../assets/logos/cotel.png";
import cbn from "../assets/logos/cbn.png";
import pil from "../assets/logos/pil.png";
import entel from "../assets/logos/entel.png";
import bcb from "../assets/logos/bcb.png";
import soboce from "../assets/logos/soboce.png";
import coboce from "../assets/logos/coboce.png";
import bisa from "../assets/logos/bisa.png";
import francesa from "../assets/logos/francesa.png";
import mercantil from "../assets/logos/mercantil.png";
import prodem from "../assets/logos/prodem.png";

const clients = [
    { name: "YPFB", logo: ypfb },
    { name: "COTEL", logo: cotel },
    { name: "CBN", logo: cbn },
    { name: "PIL", logo: pil },
    { name: "ENTEL", logo: entel },
    { name: "Banco Central", logo: bcb },
    { name: "SOBOCE", logo: soboce },
    { name: "COBOCE", logo: coboce },
    { name: "BISA", logo: bisa },
    { name: "FANCESA", logo: francesa },
    { name: "MERCANTIL", logo: mercantil },
    { name: "PRODEM", logo: prodem },
];

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

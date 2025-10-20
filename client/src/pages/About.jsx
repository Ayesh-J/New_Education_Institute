// AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="pt-32 pb-16 px-6 bg-[#F5B041]/10">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#002C77] mb-8"
        >
          About The New Educational Institute
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-4 text-gray-700 text-left"
        >
          <p>
            Established in 1934 by the visionary Late Shri Sadanand R. S. Kakodkar, NEI has been shaping young minds for over 90 years. Our mission has always been to provide a nurturing environment where children can grow, learn, and discover their path to success.
          </p>

          <p>
            The New Educational Institute is a co-educational school located in the urban area of Quepem, South Goa. Managed as a private aided institution, it offers education from Grades 5 to 10. English is the medium of instruction, and the school operates in a rented building with 20 classrooms and additional spaces for non-teaching activities and administrative offices.
          </p>

          <p>
            The school is well-equipped with a library housing 9,664 books, 12 functional computers, and a computer-aided learning lab. Drinking water is supplied through functional taps, and sanitation facilities include 12 boys’ and 11 girls’ toilets. The campus also has a playground and a pucca boundary wall for safety. Mid-day meals are provided on the premises.
          </p>

          <p>
            Over the decades, NEI has evolved while staying true to its core values—excellence in education, character-building, and community development. Beyond academics, we focus on fostering creativity, critical thinking, leadership, and social responsibility.
          </p>

          <p className="text-[#002C77] font-semibold italic text-lg mt-4">
            “Success is not final, failure is not fatal: It is the courage to continue that counts.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

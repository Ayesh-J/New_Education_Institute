import { motion } from "framer-motion";
import { BookOpen, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="relative bg-[#F5B041]/10 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#002C77]"
        >
          Welcome to The New Educational Institute
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-700 max-w-2xl mx-auto"
        >
          Established in 1934, shaping young minds through quality education and holistic growth.
        </motion.p>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-3 bg-[#002C77] text-white rounded-md font-semibold hover:bg-[#001d4f]"
        >
          Explore More
        </motion.button> */}
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 border-t-4 border-[#F5B041] shadow-lg rounded-lg text-center"
          >
            <BookOpen size={40} className="text-[#002C77] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#002C77]">Academic Excellence</h3>
            <p className="mt-2 text-gray-600">
              Empowering students through academic innovation and personalized learning.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 border-t-4 border-[#F5B041] shadow-lg rounded-lg text-center"
          >
            <Users size={40} className="text-[#002C77] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#002C77]">Cultural & Sports Activities</h3>
            <p className="mt-2 text-gray-600">
              Encouraging participation and creativity in every aspect of student life.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 border-t-4 border-[#F5B041] shadow-lg rounded-lg text-center"
          >
            <Award size={40} className="text-[#002C77] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#002C77]">Legacy of Excellence</h3>
            <p className="mt-2 text-gray-600">
              Upholding 90+ years of commitment to education and community values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 bg-[#F5B041]/10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#002C77]"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-700"
          >
            To provide holistic education that nurtures intellect, creativity, and character, preparing students to excel in life and contribute positively to society.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-[#F5B041]/20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002C77]">What Our Students Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Riya Sharma", text: "NEI has transformed my learning experience with amazing teachers and activities." },
            { name: "Amit Singh", text: "I have grown academically and socially here. Truly a wonderful institute!" },
            { name: "Sneha Patel", text: "A perfect blend of academics, culture, and sports. Highly recommend NEI." },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border-t-4 border-[#002C77] shadow-lg rounded-lg text-center bg-white"
            >
              <p className="text-gray-600">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold text-[#002C77]">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-[#002C77] text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Join NEI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Become a part of our legacy of excellence. Admissions are open for all grades from 1st to 10th standard.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-3 bg-[#F5B041] text-[#002C77] font-semibold rounded-md hover:bg-[#ffd633]"
        >
          Apply Now
        </motion.button>
      </section>
    </div>
  );
}

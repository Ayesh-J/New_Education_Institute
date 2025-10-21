import { motion } from "framer-motion";
import { BookOpen, Users, Award } from "lucide-react";
import logo from "../assets/nei_logo.png";
import building from "../assets/building.jpeg";

export default function Home() {
  return (
    <div className="mt-20">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 text-center bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${building})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Welcome to The New Educational Institute
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-200 text-lg"
          >
            Established in 1934, shaping young minds through quality education and holistic growth.
          </motion.p>
        </div>
      </section>

      {/* Highlights Section with subtle background */}
      <section
        className="py-16 px-6 relative bg-[#F5B041]/10"
        style={{
          backgroundImage: "url('/images/school-facility1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#F5B041]/40"></div>
        <div className="relative container mx-auto grid md:grid-cols-3 gap-8 z-10">
          {[
            {
              icon: <BookOpen size={40} className="text-[#002C77] mx-auto mb-4" />,
              title: "Academic Excellence",
              desc: "Empowering students through academic innovation and personalized learning.",
            },
            {
              icon: <Users size={40} className="text-[#002C77] mx-auto mb-4" />,
              title: "Cultural & Sports Activities",
              desc: "Encouraging participation and creativity in every aspect of student life.",
            },
            {
              icon: <Award size={40} className="text-[#002C77] mx-auto mb-4" />,
              title: "Legacy of Excellence",
              desc: "Upholding 90+ years of commitment to education and community values.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border-t-4 border-[#F5B041] shadow-lg rounded-lg text-center bg-white/90 relative"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#002C77]">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        className="py-16 px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/school-library.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#F5B041]/40"></div>
        <div className="relative container mx-auto text-center max-w-4xl z-10">
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
            className="mt-4 text-gray-700 bg-white/70 p-4 rounded-md inline-block"
          >
            To provide holistic education that nurtures intellect, creativity, and character, preparing students to excel in life and contribute positively to society.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/school-facility2.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#F5B041]/30"></div>
        <div className="relative container mx-auto text-center mb-12 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002C77]">What Our Students Say</h2>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8 z-10">
          {[
            { name: "Anugraha", text: "NEI has transformed my learning experience with amazing teachers and activities." },
            { name: "Saish", text: "I have grown academically and socially here. Truly a wonderful institute!" },
            { name: "Antrish Borkar", text: "A perfect blend of academics, culture, and sports. Highly recommend NEI." },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border-t-4 border-[#002C77] shadow-lg rounded-lg text-center bg-white/90 relative z-10"
            >
              <p className="text-gray-700">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold text-[#002C77]">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

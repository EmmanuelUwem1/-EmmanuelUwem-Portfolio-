"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Rocket, Heart, Sparkles, Users, Lightbulb, Zap } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Curiosity",
      description: "I'm constantly learning and exploring new frontiers in technology and engineering."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Building with people in mind—understanding needs and creating meaningful solutions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging technology to solve real-world problems creatively and effectively."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I believe the best solutions come from working together and sharing knowledge."
    }
  ];

  const passions = [
    { icon: "🔧", label: "Engineering" },
    { icon: "💡", label: "Innovation" },
    { icon: "💻", label: "Technology" },
    { icon: "🚀", label: "Problem Solving" },
    { icon: "📱", label: "Mobile Development" },
    { icon: "🌐", label: "Web Development" },
    { icon: "🎨", label: "Design Thinking" },
    { icon: "📚", label: "Lifelong Learning" },
        { icon: "🌱", label: "Personal Development" },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="px-4 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gradient shadow-2xl">
            <Image
              src="/Emmanuel Uwem.jpeg"
              alt="Emmanuel Uwem"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-4 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 shadow-lg"
          >
           
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl relative z-10"
        >
          <motion.h1 
            className="text-2xl md:text-3xl font-bold montserrat-normal mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
           {` Hello, I'm`} <span className="text-gradient">Emmanuel</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-80 mb-6 montserrat-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            An engineer who loves technology and innovation 🚀
          </motion.p>
          <motion.p
            className="text-base md:text-lg opacity-70 leading-relaxed montserrat-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
           {` I love building things that matter. Whether it's developing software, 
            crafting digital experiences, or exploring new technologies, I approach 
            every challenge with curiosity and a desire to create meaningful impact.`}
          </motion.p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="px-4 md:px-20 py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold montserrat-normal mb-8 text-center">
              A Little <span className="text-gradient">About Me</span>
            </h2>
            <div className="card p-8 md:p-12 rounded-3xl">
              <p className="text-base md:text-lg opacity-80 leading-relaxed montserrat-normal mb-6">
               {` I'm an engineer from Nigeria with a deep fascination for how technology 
                can transform ideas into reality. My journey in engineering has been driven 
                by a simple belief:`} <strong className="text-gradient">innovation happens when 
                creativity meets technical excellence</strong>.
              </p>
              <p className="text-base md:text-lg opacity-80 leading-relaxed montserrat-normal mb-6">
                I enjoy working across the full spectrum of development—from designing 
                intuitive user interfaces to architecting robust backend systems. Each 
                project is an opportunity to learn something new and contribute to building 
                solutions that genuinely help people.
              </p>
              <p className="text-base md:text-lg opacity-80 leading-relaxed montserrat-normal">
                Beyond the technical side, I value kindness, collaboration, and continuous growth. 
                I believe the best work comes from staying humble, being open to new perspectives, 
                and always striving to improve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-20 py-16 md:py-20 mesh-gradient rounded-[4rem] my-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold montserrat-normal mb-12 text-center">
            What I <span className="text-gradient">Value</span>
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="card p-6 rounded-2xl flex flex-col items-start gap-4 hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold montserrat-normal">{value.title}</h3>
                <p className="opacity-80 montserrat-normal leading-relaxed text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* What I'm Into Section */}
      <section className="px-4 md:px-20 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold montserrat-normal mb-10 text-center">
           {` What I'm`} <span className="text-gradient">Into</span>
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto"
          >
            {passions.map((passion, index) => (
              <motion.div
                key={passion.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="card px-5 py-3 rounded-full flex items-center gap-3 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="text-xl">{passion.icon}</span>
                <span className="montserrat-normal font-medium text-sm">{passion.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Closing Statement */}
      {/* <section className="px-4 md:px-20 py-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl opacity-80 leading-relaxed montserrat-normal mb-6">
            I'm always excited to connect with fellow engineers, innovators, and anyone 
            interested in using technology to make a positive difference. Feel free to reach out!
          </p>
          <p className="text-xl md:text-2xl font-bold montserrat-normal text-gradient">
            Let's create something meaningful together 🌟
          </p>
        </motion.div>
      </section> */}
    </div>
  );
}

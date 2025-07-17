"use client";

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <section className="py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-36">
        {/* Lottie Animation */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <Player
            autoplay
            loop
            src="/animations/developer.json"
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, amount: 0.3 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Hi there! {"I'm"} <strong>Gaurav Bhardwaj</strong>, a dedicated Frontend
            Developer with over <strong>3 years of experience in React</strong>{" "}
            and more than{" "}
            <strong>1 year of hands-on experience in Node.js</strong>. I
            specialize in crafting intuitive, high-performance user interfaces
            using modern technologies like <strong>Next.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>.
            <br />
            <br />
            With a strong eye for design and a deep understanding of
            component-driven development, I strive to build applications that
            are both aesthetically pleasing and functionally robust. My backend
            experience with Node.js allows me to seamlessly integrate APIs and
            work across the full stack when needed.
            <br />
            <br />
            I’m constantly improving my skills, staying up to date with the
            latest tech trends, and bringing clean, scalable code to life.
            Whether it’s creating dynamic web apps or exploring new UX patterns,
            I’m always driven by a passion for building impactful digital
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

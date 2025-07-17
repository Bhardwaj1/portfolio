"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left flex-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hi, I'm Gaurav Bhardwaj
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Enthusiast",
                "Next.js Wizard",
                "MERN Stack Developer",
                "Backend Developer",
                "Node.js Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Gaurav_Resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 flex items-center justify-center"
            >
              <FaDownload className="mr-2" />
              Resume
            </a>

            <a
              href="#contact" // You can change this to an email or form section
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Picture with 3D effect */}
        {/* Right: Profile Picture with 3D effect */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          scale={1.05}
          transitionSpeed={400}
          className="rounded-full shadow-xl flex-1 max-w-[320px] xl:max-w-[400px]"
        >
          <div className="aspect-square w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 rounded-full overflow-hidden">
            <Image
              src="/GauravProfile.jpeg"
              alt="Gaurav's Profile Picture"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, Database, Settings } from "lucide-react";

const skills = {
  frontend: [
    { name: "HTML5", level: "Intermediate" },
    { name: "CSS3", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Redux", level: "Intermediate" },
    { name: "Zustand", level: "Intermediate" },
    { name: "Framer Motion", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "RESTful APIs", level: "Intermediate" },
    { name: "Socket.io", level: "Intermediate" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "VS Code", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" },
    { name: "Insomnia", level: "Intermediate" },
    { name: "AWS", level: "Beginner" },
  ],
};

const badgeColor = (level) => {
  if (level === "Beginner") return "bg-yellow-700 text-yellow-300";
  return "bg-emerald-900 text-emerald-300";
};

export default function ProfessionalSkills() {
  return (
    <section className="py-16 px-4" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, amount: 0.3 }}
        viewport={{ once: true }}
        className="text-center md:text-left flex-1"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Professional Skills
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          A comprehensive overview of my technical expertise and professional
          capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Code className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <ul className="space-y-2">
              {skills.frontend.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>{item?.name}</span>
                  <span className="text-sm px-2 py-0.5 rounded-full bg-emerald-900 text-emerald-300">
                    {item?.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Database className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <ul className="space-y-2">
              {skills.backend.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>{item?.name}</span>
                  <span className="text-sm px-2 py-0.5 rounded-full bg-emerald-900 text-emerald-300">
                    {item?.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Languages */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Settings className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-white">
                Tools & Others
              </h3>
            </div>
            <ul className="space-y-2">
              {skills.tools.map((tool, i) => (
                <li
                  key={i}
                  className="flex justify-between text-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>{tool.name}</span>
                  <span
                    className={`text-sm px-2 py-0.5 rounded-full ${badgeColor(
                      tool.level
                    )}`}
                  >
                    {tool.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

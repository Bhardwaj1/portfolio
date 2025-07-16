"use client";

import { BadgeCheck, Code, Database, Settings } from "lucide-react";

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
      <h2 className="text-4xl font-bold text-center mb-4">
        Professional <span className="text-purple-500">Skills</span>
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
              <li key={i} className="flex justify-between text-gray-200">
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
              <li key={i} className="flex justify-between text-gray-200">
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
            <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
          </div>
          <ul className="space-y-2">
            {skills.tools.map((tool, i) => (
              <li key={i} className="flex justify-between text-gray-200">
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
    </section>
  );
}

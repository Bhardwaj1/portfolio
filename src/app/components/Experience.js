
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Nimbus Systems Private Limited",
    role: "Frontend Developer",
    duration: "Aug 2023 – Present",
    location: "Kolkata, West Bengal",
    description: `
      • Developed reusable UI components to streamline development and maintain design consistency.
      • Managed application state and logic using React’s useState, useReducer, and Context API.
      • Implemented key features: purchase & sales orders, SKU creation, product & warehouse management, vendor and voucher management, subscriptions, and various agreement workflows.
      • Utilized Material UI components, modals, and icons for a polished UI.
      • Integrated frontend with backend services via Axios.
      • Focused on performance optimization for better UX.
    `,
    tech: "React.js, Node.js, Express, MongoDB",
  },
  {
    company: "Web Idea Solution LLP",
    role: "Frontend Developer",
    duration: "Feb 2022 – Aug 2023",
    location: "Kolkata, West Bengal",
    description: `
      • Built reusable UI components, reducing development time by 20%.
      • Implemented role-based authentication & authorization (Admin, Teacher, Student), enhancing security.
      • Used Material-UI tables/icons and React-Select for advanced form interactions.
      • Managed global state using Context API and Redux DevTools.
      • Implemented real-time attendance & grade updates using WebSockets.
      • Optimized MongoDB API performance with indexing and pagination, reducing response times by 50%.
    `,
    tech: "React.js, Node.js, Express, MongoDB",
  },
];


export default function Experience() {
  return (
    <section className="py-16 px-4" id="experience">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Experience</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-center w-full"
              >
                {/* Spacer for timeline positioning */}
                <div className={`hidden md:block w-1/2 ${isRight ? 'order-1' : 'order-2'}`} />

                {/* Experience Card */}
                <div
                  className={`w-full md:w-1/2 ${isRight ? 'md:pr-8 md:order-2' : 'md:pl-8 md:order-1'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {exp.role} @ {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      {exp.duration} | {exp.location}
                    </p>
                    <p className="text-sm italic text-purple-600 mb-3">
                      {exp.tech}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.description
                        .trim()
                        .split('\n')
                        .map((line, i) => (
                          <li key={i}>{line.replace('• ', '')}</li>
                        ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-6 w-5 h-5 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-1/2 z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




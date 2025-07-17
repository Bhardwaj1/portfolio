"use client";
import { motion } from "framer-motion";
const projects = [
  {
    title: "My Portfolio Website",
    description:
      "A modern, fully responsive portfolio website built using Next.js, Tailwind CSS, and Framer Motion. It showcases projects, experience, education, and technical skills with smooth animations and clean UI design. Optimized for performance and accessibility across all devices.",

    image: "/portfolioProfilePicture.png",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with Next.js and Socket.io. It features instant messaging, user authentication, and dynamic chat rooms. The UI is designed with Tailwind CSS for a seamless user experience across devices. Perfect for collaborative or social communication.",
    image: "/chatapp.jpg",
    link: "https://your-weather-app-link",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking app built with React and Tailwind CSS. It allows users to add, delete, and categorize expenses while dynamically updating the balance and transaction history. Ideal for personal finance management with a clean, modern UI.",
    image: "/expensetracker.webp",
    link: "https://your-todo-app-link.com",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, amount: 0.3 }}
        viewport={{ once: true }}
        className="text-center md:text-left flex-1"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 border border-transparent p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

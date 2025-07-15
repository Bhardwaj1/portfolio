"use client";

const projects = [
  {
    title: "My Portfolio Website",
    description: "A personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/projects/portfolio.png",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Todo App",
    description: "A simple and clean todo app using React and Tailwind.",
    image: "/projects/todo.png",
    link: "https://your-todo-app-link.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeather API and Next.js.",
    image: "/projects/weather.png",
    link: "https://your-weather-app-link.com",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
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
    </section>
  );
}

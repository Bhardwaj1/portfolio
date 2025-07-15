const experiences = [
    {
      company: 'ABC Tech Solutions',
      role: 'Frontend Developer',
      duration: 'Jan 2023 – Present',
      description:
        'Worked on scalable web applications using React, Next.js, and Tailwind. Collaborated with designers and backend teams to deliver polished UIs.',
    },
    {
      company: 'XYZ Web Agency',
      role: 'Frontend Intern',
      duration: 'Jul 2022 – Dec 2022',
      description:
        'Built and maintained client websites with HTML, CSS, JavaScript. Gained hands-on experience in responsive design and cross-browser testing.',
    },
  ];
  
  export default function Experience() {
    return (
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-10 border-l border-gray-300 dark:border-gray-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-blue-500 rounded-full" />
              <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
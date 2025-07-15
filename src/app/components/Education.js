const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science',
      duration: '2019 – 2023',
      description:
        'Graduated with a strong foundation in software engineering, data structures, and frontend technologies.',
    },
    {
      institution: 'ABC Senior Secondary School',
      degree: '12th CBSE',
      duration: '2018 – 2019',
      description:
        'Completed senior secondary education with a focus on PCM subjects and computer science.',
    },
  ];
  
  export default function Education() {
    return (
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
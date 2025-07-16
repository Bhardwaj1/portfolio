const education = [
 {
    institution: 'Kolhan University, Jamshedpur, Jharkhand',
    degree: 'B.Tech in Mechanical Engineering',
    duration: '2015 – 2019',
    description:
      'Completed B.Tech in Mechanical Engineering. Developed strong analytical and problem-solving skills. Later transitioned into IT with self-taught skills in web development.',
  },
  {
    institution: 'Sri Chaitanya, Vishakhapatnam, Andhra Pradesh',
    degree: 'Intermediate (12th)',
    duration: '2013 – 2015',
    description:
      'Focused on Physics, Chemistry, and Mathematics (PCM), with an early interest in coding and technology.',
  },
  {
    institution: 'DAV Public School, Samastipur, Bihar',
    degree: 'Matriculation (10th)',
    duration: '2011 – 2013',
    description:
      'Completed secondary education with academic excellence and leadership in extracurriculars.',
  },
];

export default function Education() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900" id="education">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-3xl mx-auto space-y-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.duration}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

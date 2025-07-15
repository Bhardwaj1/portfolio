const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Tailwind CSS', 'Git', 'REST APIs', 'Node.js', 'Express.js' , 'MongoDb'
  ];
  
  export default function Skills() {
    return (
      <section className="py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
import Image from 'next/image';

const socials = [
   {
    name: 'LeetCode',
    icon: '/leetcode.svg',
    link: 'https://leetcode.com/u/bhardwajgaurav204/',
  },
  {
    name: 'LinkedIn',
    icon: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/gaurav-bhardwaj-073976179/',
  },
   {
    name: 'GitHub',
    icon: '/github.svg',
    link: 'https://github.com/Bhardwaj1',
  },
];

export default function Socials() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Let’s Connect</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        You can find me here:
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="transition transform hover:scale-110"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

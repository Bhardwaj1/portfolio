import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
   {
    name: 'LeetCode',
    icon: <SiLeetcode size={30} />,
    link: 'https://leetcode.com/u/bhardwajgaurav204/',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={30} />,
    link: 'https://www.linkedin.com/in/gaurav-bhardwaj-073976179/',
  },
   {
    name: 'GitHub',
    icon: <FaGithub size={30} />,
    link: 'https://github.com/Bhardwaj1',
  },
];

export default function Socials() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Let’s Connect</h2>
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
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

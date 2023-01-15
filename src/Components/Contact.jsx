import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  {
    title: 'email',
    detail: 'sajo2000@gmail.com',
    icons: <MdEmail className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'mailto:sajo2000@gmail.com',
  },
  {
    title: 'linkedin',
    detail: '@dyessucr',
    icons: <FaLinkedin className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://www.linkedin.com/in/dylansuarez/',
  },
  {
    title: 'twitter',
    detail: '@dyessucr',
    icons: <FaTwitterSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://twitter.com/DyEsSuCr',
  },
  {
    title: 'github',
    detail: '@dyessucr',
    icons: <FaGithubSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://github.com/DyEsSuCr',
  },
];

const Contact = () => {
  return (
    <div className="bg-white text-dark pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Contactame</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Tienes alguna pregunta contactame:
      </p>
      <div className="mt-[6vh] grid gap-12 grid-cols-1 lg:grid-cols-2">
        {socials.map((social) => {
          return (
            <a key={crypto.randomUUID()} href={social.url} target="_blank">
              <div
                className="flex items-center flex-col md:flex-row p-6 duration-300 bg-transparent rounded-2xl
                hover:scale-105 hover:duration-300 hover:bg-grayy hover:text-white"
              >
                {social.icons}
                <div className="text-center md:text-start">
                  <p className="uppercase text-2xl font-extrabold md:text-3xl">{social.title}</p>
                  <p className="text-2xl font-normal md:text-3xl">{social.detail}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;

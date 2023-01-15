import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const About = () => {
  return (
    <div className="min-h-screen bg-dark text-white px-[5vw] md:px-0">
      <div className="flex justify-evenly flex-col lg:flex-row">
        <div className="mt-[5vh] mx-auto order-1 lg:mx-0 mb-[20vh] lg:mt-[20vh]">
          <div className="mb-[4vh]">
            <h1 className="font-bold text-6xl text-center lg:text-start lg:text-9xl">Hola! 👋</h1>
            <h1 className="font-bold text-6xl text-center lg:text-start lg:text-9xl">
              Soy <span className="text-[#15c0f0]">Dylan</span>
            </h1>
          </div>
          <div className="w-[80%] mx-auto lg:w-[50vw] lg:mx-0">
            <p className="text-3xl font-medium text-center lg:text-start">
              Apacinado por el <span className="text-[#15c0f0]">Desarrollador Web</span>
            </p>
          </div>
          <div
            className="text-[2.75rem] text-white flex flex-row duration-300 my-[3.5vh] justify-center
                lg:justify-start"
          >
            <a href="https://github.com/DyEsSuCr" target="_blank">
              <FaGithub
                className="mr-[1.75vh] duration-300 hover:text-bluee hover:scale-125
                hover:duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/dylansuarez/" target="_blank">
              <FaLinkedin
                className="mr-[1.75vh] duration-300 hover:text-bluee hover:scale-125
                hover:duration-300"
              />
            </a>
          </div>
          <a className="flex justify-center lg:inline" href="mailto:2000sajo@gmail.com">
            <button
              className="inline-flex items-center justify-center rounded-md font-semibold
              duration-200 h-12 min-w-[3rem] text-lg p-6 bg-bluee text-white hover:bg-[#328de2]"
            >
              Contactame
              <FaArrowRight className="pl-2" />
            </button>
          </a>
        </div>

        <div className="pt-[18vh] flex justify-center mb-[5vh] lg:order-2 lg:mb-0">
          <img
            className="duration-200 h-[35vh] w-[35vh] rounded-[50%] border-none bg-white
            shadow-[50px_50px_0_0_rgba(19,169,211,1)] hover:shadow-none hover:translate-x-8
            hover:translate-y-8 lg:h-[50vh] lg:w-[50vh]"
            src={avatar}
            alt="Dylan Suarez"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

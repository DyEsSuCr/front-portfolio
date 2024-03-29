// Icons
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa'

// Componets
import { Avatar } from './Avatar'

const About = () => {
  return (
    <div className='min-h-screen bg-dark text-white px-[5vw] md:px-0'>
      <div className='flex justify-evenly flex-col lg:flex-row'>
        <div className='mt-[5vh] mx-auto order-1 lg:mx-0 mb-[20vh] lg:mt-[20vh]'>
          <div className='mb-[4vh]'>
            <h1 className='font-bold text-6xl text-center lg:text-start lg:text-9xl'>Hola! 👋</h1>
            <h1 className='font-bold text-6xl text-center lg:text-start lg:text-9xl'>
              Soy <span className='text-[#15c0f0]'>Dylan</span>
            </h1>
          </div>
          <div className='w-[80%] mx-auto lg:w-[45vw] lg:mx-0'>
            <p className='text-3xl font-medium text-center lg:text-start'>
              Un <span className='text-[#15c0f0]'>desarrollador web</span> apasionado y comprometido con la entrega de soluciones innovadoras y de alta calidad. Me adapto rápidamente a nuevos desafíos y busco constantemente mejorar mis habilidades para lograr resultados excepcionales. Valorando el trabajo en equipo, me enfoco en la eficiencia y la colaboración para tener éxito en cada proyecto.
            </p>
          </div>
          <div
            className='text-[2.75rem] text-white flex flex-row duration-300 my-[3.5vh] justify-center
                lg:justify-start'
          >
            <a href='https://github.com/DyEsSuCr' target='_blank' rel='noreferrer'>
              <FaGithub
                className='mr-[1.75vh] duration-300 hover:text-bluee hover:scale-125
                hover:duration-300'
              />
            </a>
            <a href='https://www.linkedin.com/in/dylansuarez/' target='_blank' rel='noreferrer'>
              <FaLinkedin
                className='mr-[1.75vh] duration-300 hover:text-bluee hover:scale-125
                hover:duration-300'
              />
            </a>
          </div>
          <a className='flex justify-center lg:inline' href='mailto:2000sajo@gmail.com'>
            <button
              className='inline-flex items-center justify-center rounded-md font-semibold
              duration-200 h-12 min-w-[3rem] text-lg p-6 bg-bluee text-white hover:bg-[#328de2]'
            >
              Contactame
              <FaArrowRight className='pl-2' />
            </button>
          </a>
        </div>

        <Avatar />
      </div>
    </div>
  )
}

export default About

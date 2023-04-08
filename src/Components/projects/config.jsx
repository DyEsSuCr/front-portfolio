import { skills as apiSkills } from '../skills/config'

import portfolio from '../../images/projects/portfolio.png'
import apiPortfolio from '../../images/projects/api.png'
import timers from '../../images/projects/tempo.png'
import fastassistance from '../../images/projects/fast.png'
import dyggram from '../../images/projects/dyggram.png'

function dame (...skillName) {
  const skills = []

  skillName.map((name) => apiSkills.map((skill) => skill.name === name && skills.push(skill)))

  return skills
}

export const projects = [
  {
    id: crypto.randomUUID(),
    image: dyggram,
    title: 'DyGgram',
    description: 'Clon Instragram, con el sistema de authennticacion 🔐JWT',
    github: 'https://github.com/DyEsSuCr/dyggram',
    demo: null,
    skills: dame('React', 'Tailwind', 'Git', 'MySQL', 'Express', 'NodeJS', 'pnpm')
  },
  {
    id: crypto.randomUUID(),
    image: fastassistance,
    title: 'FastAssitance',
    description:
      'Un sistema de información que permita agendar un turno, en este caso para un salón de belleza, que permita al cliente escoger el empleado que quiere que lo atienda y una fecha y hora específica para que sea atendido,',
    github: 'https://github.com/DyEsSuCr/FastAssitance',
    demo: null,
    skills: dame('Django', 'Git', 'Tailwind', 'HTML', 'CSS', 'MySQL')
  },
  {
    id: crypto.randomUUID(),
    image: apiPortfolio,
    title: 'Api Portfolio',
    description: 'Api Portfolio para obtener cambios y generar información de currículum',
    github: 'https://github.com/DyEsSuCr/api-portfolio',
    demo: null,
    skills: dame('Django', 'RestFramework', 'Git', 'PostgreSQL')
  },
  {
    id: crypto.randomUUID(),
    image: portfolio,
    title: 'Portfolio',
    description: 'Portfolio personal',
    github: 'https://github.com/DyEsSuCr/front-portfolio',
    demo: 'https://dyessucr.github.io/front-portfolio/',
    skills: dame('Astro', 'Tailwind', 'Git', 'pnpm')
  },
  {
    id: crypto.randomUUID(),
    image: timers,
    title: 'Timers',
    description: 'Temporizadores usando la API local de LocalStorage',
    github: 'https://github.com/DyEsSuCr/react-timers',
    demo: null,
    skills: dame('React', 'NPM', 'Git', 'Tailwind', 'Figma')
  }
]

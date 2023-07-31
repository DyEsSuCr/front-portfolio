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
    description: 'Un clon de Instagram es una aplicación o sitio web que imita o reproduce las características y funcionalidades de la popular red social Instagram con autenticación JWT 🔒 permite a los usuarios registrarse y acceder a su cuenta de forma segura mediante un token criptográfico. JWT ofrece escalabilidad, flexibilidad y seguridad en la autenticación',
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
    description: 'La API portafolio ofrece acceso fácil y seguro a información detallada de los proyectos y habilidades.',
    github: 'https://github.com/DyEsSuCr/api-portfolio',
    demo: null,
    skills: dame('Django', 'RestFramework', 'Git', 'PostgreSQL')
  },
  {
    id: crypto.randomUUID(),
    image: portfolio,
    title: 'Portfolio',
    description: 'En mi portafolio encontrarás proyectos únicos y atractivos, desde sitios web simples hasta aplicaciones más complejas. Si estás interesado en trabajar conmigo o ver ejemplos de mi trabajo, ¡contáctame!',
    github: 'https://github.com/DyEsSuCr/portfolio',
    demo: 'https://dyessucr.github.io/front-portfolio/',
    skills: dame('Astro', 'Tailwind', 'Git', 'pnpm')
  },
  {
    id: crypto.randomUUID(),
    image: timers,
    title: 'Timers',
    description: 'Temporizadores usando la API local de LocalStorage',
    github: 'https://github.com/DyEsSuCr/react-timers',
    demo: 'https://dyessucr.github.io/react-timers/',
    skills: dame('React', 'NPM', 'Git', 'Tailwind', 'Figma')
  }
]

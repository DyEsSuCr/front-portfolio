// Skills
import { api_skills } from './../skills/config'

// projects
import Portfolio from './../../images/projects/portfolio.png'
import ApiPortfolio from './../../images/projects/api.png'
import Timers from './../../images/projects/tempo.png'
import Turns from './../../images/projects/fast.png'

function dame(...skillName) {
  const skills = []

  skillName.map((name) => {
    api_skills.map((skill) => {
      skill.name == name && skills.push(skill)
    })
  })

  return skills
}

export const api_projects = [
  {
    id: crypto.randomUUID(),
    image: Portfolio,
    title: 'Portfolio',
    description: 'Portfolio personal',
    github: 'https://github.com/DyEsSuCr/front-portfolio',
    demo: 'https://dyessucr.github.io/front-portfolio/',
    skills: dame('React', 'Tailwind', 'Git', 'NPM'),
  },
  {
    id: crypto.randomUUID(),
    image: ApiPortfolio,
    title: 'Api Portfolio',
    description: 'Api Portfolio para obtener cambios y generar información de currículum',
    github: 'https://github.com/DyEsSuCr/api-portfolio',
    demo: '',
    skills: dame('Django', 'RestFramework', 'Git', 'PostgreSQL'),
  },
  {
    id: crypto.randomUUID(),
    image: Turns,
    title: 'FastAssitance',
    description:
      'Un sistema de información que permita agendar un turno, en este caso para un salón de belleza, que permita al cliente escoger el empleado que quiere que lo atienda y una fecha y hora específica para que sea atendido,',
    github: '',
    demo: '',
    skills: dame('Django', 'Git', 'Tailwind', 'HTML', 'CSS', 'MySQL'),
  },
  {
    id: crypto.randomUUID(),
    image: Timers,
    title: 'Timers',
    description: 'Temporizadores usando la API local de LocalStorage',
    github: 'https://github.com/DyEsSuCr/react-timers',
    demo: '',
    skills: dame('React', 'NPM', 'Git', 'Tailwind', 'Figma'),
  },
]

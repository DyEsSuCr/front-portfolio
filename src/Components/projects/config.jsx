// Skills
import { api_skills } from './../skills/config'

// projects
import Portfolio from './../../images/projects/portfolio.png'
import ApiPortfolio from './../../images/projects/api.png'
import Timers from './../../images/projects/tempo.png'

export function dame(...skillName) {
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
    id: 1,
    image: Portfolio,
    title: 'Portfolio',
    description: 'Portfolio personal',
    github: 'https://github.com/DyEsSuCr/front-portfolio',
    demo: 'https://dyessucr.github.io/front-portfolio/',
    skills: dame('React', 'Tailwind', 'Git', 'NPM'),
  },
  {
    id: 2,
    image: ApiPortfolio,
    title: 'Api Portfolio',
    description: 'Api Portfolio para obtener cambios y generar información de currículum',
    github: 'https://github.com/DyEsSuCr/api-portfolio',
    demo: '',
    skills: dame('Django', 'RestFramework', 'Git', 'PostgreSQL'),
  },
  {
    id: 3,
    image: Timers,
    title: 'Timers',
    description: 'Temporizadores usando localstorage',
    github: 'https://github.com/DyEsSuCr/react-timers',
    demo: '',
    skills: dame('React', 'NPM', 'Git', 'Tailwind', 'Figma'),
  },
]

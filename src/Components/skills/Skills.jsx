// React
import { useState, useEffect } from 'react'

// Skills
import { api_skills } from './config'

// Componets
import { Skill } from './Skill'

const Skills = () => {
  const [skills, setSkills] = useState()

  useEffect(() => {
    setSkills(api_skills)
  }, [])

  return (
    <div className="bg-white text-dark pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Habilidades</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Tecnologías que utilizo en mi desarrollo:
      </p>
      <div className="grid mt-[6vh] gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {!skills ? 'Cargando...' : skills.map((skill) => <Skill key={skill.id} skill={skill} />)}
      </div>
    </div>
  )
}

export default Skills

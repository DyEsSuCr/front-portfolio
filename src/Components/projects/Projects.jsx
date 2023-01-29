// React
import { useState, useEffect } from 'react'

// Projects
import { api_projects } from './config'

// Componets
import { Project } from './Project'

const Projects = () => {
  const [projects, setProjects] = useState()

  useEffect(() => {
    setProjects(api_projects)
  }, [])

  return (
    <div className="bg-dark text-white pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Projectos</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Echa un vistazo a mis proyectos:
      </p>
      <div className="mt-[6vh] grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!projects
          ? 'Cargando...'
          : projects.map((project) => <Project key={project.id} project={project} />)}
      </div>
    </div>
  )
}

export default Projects

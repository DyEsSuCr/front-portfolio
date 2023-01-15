import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const url = 'https://api-portfolio-hulf.onrender.com/projects/';
  const [projects, setProjects] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setProjects(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="bg-dark text-white pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Projectos</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Echa un vistazo a mis proyectos:
      </p>
      <div className="mt-[6vh] grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {!projects
          ? 'Cargando...'
          : projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="bg-grayy rounded-2xl w-fit duration-300 h-fit hover:duration-300 
                  hover:-translate-y-4 shadow-md shadow-gray-800"
                >
                  <img className="rounded-t-2xl" src={project.image} alt={project.name} />
                  <div className="p-6 flex flex-col justify-around">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <p>
                      {project.description}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                      temporibus quos laudantium eveniet.
                    </p>
                    <div className="mt-[2.5vh] mb-[3vh]">
                      {project.skills.map((skill) => {
                        return (
                          <a key={skill.id} href={skill.url} target="_blank">
                            <span
                              className="inline-flex items-center max-w-full font-medium rounded-full 
                              min-h-[2rem] min-w-[2rem] m-1 p-2 bg-[#C4F1F9] text-[#086F83]
                              border-dark hover:bg-[#bbdee6] duration-300"
                            >
                              <span
                                className="rounded-full inline-flex justify-center items-center 
                                text-center font-medium relative w-6 h-6 mx-1"
                              >
                                <img
                                  className="w-full h-full object-cover rounded-2xl"
                                  src={skill.logo}
                                  alt={skill.name}
                                />
                              </span>
                              <span className="text-[.9rem] overflow-hidden">{skill.name}</span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="flex items-center flex-row gap-3">
                      <a href={project.github} target="_blank">
                        <button
                          className="inline-flex justify-center items-center gap-2 relative
                        rounded-md font-semibold duration-200 h-10 min-w-[2.5rem] text-base bg-blue-500 text-white px-2 hover:bg-blue-600"
                        >
                          <FaGithub />
                          <span className="inline-flex">Github</span>
                        </button>
                      </a>
                      {project.demo === null ? (
                        ''
                      ) : (
                        <a href={project.demo} target="_blank">
                          <button
                            className="inline-flex justify-center items-center gap-2 relative
                            rounded-md font-semibold duration-200 h-10 min-w-[2.5rem] text-base bg-gray-400 text-white px-2 hover:bg-gray-500"
                          >
                            <span className="inline-flex">Demo</span>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Projects;

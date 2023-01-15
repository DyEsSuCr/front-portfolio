import { useState, useEffect } from 'react';

const Skills = () => {
  const url = 'http://127.0.0.1:8000/skills/';
  const [skills, setSkills] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setSkills(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="bg-white text-dark pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Habilidades</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Tecnologías que utilizo en mi desarrollo:
      </p>
      <div className="grid mt-[6vh] gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {!skills
          ? 'Cargando...'
          : skills.map((skill) => {
              return (
                <a key={skill.id} href={skill.url} target="_blank">
                  <div>
                    <img
                      className="h-28 w-28 mx-auto block p-[1rem] rounded-[1.5rem] shadow-xl duration-500 cursor-pointer hover:shadow-none hover:scale-125 hover:duration-500"
                      src={skill.logo}
                      alt={skill.name}
                    />
                  </div>
                  <p className="font-light text-2xl text-center mt-[2vh]">{skill.name}</p>
                </a>
              );
            })}
      </div>
    </div>
  );
};

export default Skills;

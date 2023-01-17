// Skills
import CSS from './../images/skills/css-logo.webp';
import Django from './../images/skills/django-logo.png';
import Figma from './../images/skills/figma-logo.png';
import Git from './../images/skills/git.png';
import HTML from './../images/skills/html-logo.png';
import JavaScript from './../images/skills/js-logo.png';
import MySQL from './../images/skills/mysql-logo.png';
import NPM from './../images/skills/npm-logo.png';
import PostgreSQL from './../images/skills/postgresql-logo.png';
import React from './../images/skills/react-logo.png';
import RestFramework from './../images/skills/restframework-logo.webp';
import Sass from './../images/skills/sass-logo.png';
import Tailwind from './../images/skills/tailwind-logo.png';

// React
import { useState, useEffect } from 'react';

const api_skills = [
  {
    id: crypto.randomUUID(),
    name: 'Django',
    url: 'https://www.djangoproject.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'RestFramework',
    url: 'https://www.django-rest-framework.org/',
  },
  {
    id: crypto.randomUUID(),
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  {
    id: crypto.randomUUID(),
    name: 'React',
    url: 'https://es.reactjs.org/',
  },
  {
    id: crypto.randomUUID(),
    name: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    id: crypto.randomUUID(),
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sass',
    url: 'https://sass-lang.com/',
  },
  {
    id: crypto.randomUUID(),
    name: 'CSS',
    url: 'https://developer.mozilla.org/es/docs/Web/CSS',
  },
  {
    id: crypto.randomUUID(),
    name: 'Git',
    url: 'https://git-scm.com/',
  },
  {
    id: crypto.randomUUID(),
    name: 'HTML',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
  },
  {
    id: crypto.randomUUID(),
    name: 'NPM',
    url: 'https://www.npmjs.com/',
  },

  {
    id: crypto.randomUUID(),
    name: 'Figma',
    url: 'https://www.figma.com/',
  },
];

const skills_logos = {
  Django,
  RestFramework,
  JavaScript,
  React,
  MySQL,
  PostgreSQL,
  Tailwind,
  Sass,
  CSS,
  Git,
  HTML,
  NPM,
  Figma,
};

const Skills = () => {
  const [skills, setSkills] = useState();

  useEffect(() => {
    setSkills(api_skills);
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
                      className="h-28 w-28 mx-auto block p-[1rem] rounded-[1.5rem] shadow-xl
                      duration-500 cursor-pointer hover:shadow-none hover:scale-125 hover:duration-500"
                      src={skills_logos[skill.name]}
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

export const Skill = ({ skill }) => {
  return (
    <a href={skill.url} target='_blank' rel='noreferrer' className='m-auto'>
      <div>
        <img
          className='h-28 w-28 mx-auto block p-[1rem] rounded-[1.5rem] shadow-xl duration-500 cursor-pointer hover:shadow-none hover:scale-125 hover:duration-500'
          src={skill.logo}
          alt={skill.name}
        />
      </div>
      <p className='font-light text-2xl text-center mt-[2vh]'>{skill.name}</p>
    </a>
  )
}

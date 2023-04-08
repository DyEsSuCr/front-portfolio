export const Social = ({ social }) => {
  return (
    <a href={social.url} target='_blank' rel='noreferrer'>
      <div
        className='flex items-center flex-col md:flex-row p-6 duration-300 bg-transparent rounded-2xl
                hover:scale-105 hover:duration-300 hover:bg-grayy hover:text-white'
      >
        {social.icons}
        <div className='text-center md:text-start'>
          <p className='uppercase text-2xl font-extrabold md:text-3xl'>{social.title}</p>
          <p className='text-2xl font-normal md:text-3xl'>{social.detail}</p>
        </div>
      </div>
    </a>
  )
}

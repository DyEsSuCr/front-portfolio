import { socials } from './config'
import { Social } from './Social'

const Contact = () => {
  return (
    <div className="bg-white text-dark pt-[5vw] px-[5vw] pb-[15vh] h-fit">
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold duration-300">Contactame</h3>
      <p className="text-2xl pt-[1vh] md:text-4xl font-light duration-300">
        Tienes alguna pregunta contactame:
      </p>
      <div className="mt-[6vh] grid gap-12 grid-cols-1 lg:grid-cols-2">
        {socials.map((social) => (
          <Social key={social.id} social={social} />
        ))}
      </div>
    </div>
  )
}

export default Contact

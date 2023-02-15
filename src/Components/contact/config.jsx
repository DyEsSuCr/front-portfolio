import { FaLinkedin, FaWhatsappSquare, FaTwitterSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const socials = [
  {
    id: crypto.randomUUID(),
    title: 'email',
    detail: 'sajo2000@gmail.com',
    icons: <MdEmail className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'mailto:sajo2000@gmail.com',
  },
  {
    id: crypto.randomUUID(),
    title: 'Whatsapp',
    detail: '+57 3013434409',
    icons: <FaWhatsappSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://api.whatsapp.com/send?phone=573013434409',
  },
  {
    id: crypto.randomUUID(),
    title: 'linkedin',
    detail: '@dyessucr',
    icons: <FaLinkedin className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://www.linkedin.com/in/dylansuarez/',
  },
  {
    id: crypto.randomUUID(),
    title: 'twitter',
    detail: '@dyessucr',
    icons: <FaTwitterSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://twitter.com/DyEsSuCr',
  },
]

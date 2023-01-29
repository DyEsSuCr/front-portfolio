import { FaLinkedin, FaWhatsappSquare, FaTwitterSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const socials = [
  {
    id: 1,
    title: 'email',
    detail: 'sajo2000@gmail.com',
    icons: <MdEmail className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'mailto:sajo2000@gmail.com',
  },
  {
    id: 2,
    title: 'Whatsapp',
    detail: '+57 3013434409',
    icons: <FaWhatsappSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://api.whatsapp.com/send?phone=573013434409',
  },
  {
    id: 3,
    title: 'linkedin',
    detail: '@dyessucr',
    icons: <FaLinkedin className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://www.linkedin.com/in/dylansuarez/',
  },
  {
    id: 4,
    title: 'twitter',
    detail: '@dyessucr',
    icons: <FaTwitterSquare className="mr-[1.5vw] text-8xl text-bluee" />,
    url: 'https://twitter.com/DyEsSuCr',
  },
]

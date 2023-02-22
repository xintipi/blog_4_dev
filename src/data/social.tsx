import { GrFacebook, GrGithub, GrLinkedin, GrSkype } from 'react-icons/gr'

export const social = [
  {
    id: 1,
    title: 'Facebook',
    href: 'https://tinyurl.com/yc2ekzfd',
    icon: <GrFacebook size={19} className="text-fbColor" />,
  },
  {
    id: 2,
    title: 'LinkedIn',
    href: 'https://tinyurl.com/3xneh8zm',
    icon: <GrLinkedin size={19} className="text-linkedinColor" />,
  },
  {
    id: 3,
    title: 'Skype',
    href: 'https://join.skype.com/invite/aXpEeQSVs7q0',
    icon: <GrSkype size={19} className="text-skypeColor" />,
  },
  {
    id: 4,
    title: 'Github',
    href: 'https://tinyurl.com/yx9dy849',
    icon: <GrGithub size={19} />,
  },
]

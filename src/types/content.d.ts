import { IconType } from 'react-icons'

interface Content {
  nav: Nav[]
  hero: Hero
  skills: Skills
  services: Services
  projects: Projects
  testimonials: Testimonials
  contact: Contact
  footer: Footer
}

interface Nav {
  link: string
  icon: IconType
}

interface Skills {
  title: string
  subtitle: string
  skill_content: Skillcontent[]
  icon: IconType
}
interface Skillcontent {
  name: string
  para: string
  logo: string
}

interface Hero {
  title: string
  paragraph: string
  btnText: string
  image: string
  hero_content: Herocontent[]
}
interface Herocontent {
  count: string
  text: string
}

interface Services {
  title: string
  subtitle: string
  service_content: ServiceContent[]
}
interface ServiceContent {
  title: string
  para: string
  logo: string
}

interface Projects {
  title: string
  subtitle: string
  image: string
  project_content: Projectcontent[]
}
interface Projectcontent {
  title: string
  des: string
  image: string
}

interface Testimonials {
  title: string
  subtitle: string
  testimonials_content: Testimonialscontent[]
}
interface Testimonialscontent {
  review: string
  img: string
  name: string
}

interface Contact {
  title: string
  subtitle: string
  social_media: Socialmedia[]
}
interface Socialmedia {
  text: string
  icon: IconType
  link: string
}

interface Footer {
  text: string
}

import { IconType } from 'react-icons'

interface Content {
  hero: Hero
  skills: Skills
  services: Services
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

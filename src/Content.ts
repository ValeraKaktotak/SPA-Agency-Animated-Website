//Import Images
import Hero_person from '@/assets/images/Hero/person.png'
import eye from '@/assets/images/Skills/eye.png'
import face from '@/assets/images/Skills/face.png'
import facial from '@/assets/images/Skills/facial.png'
import massage from '@/assets/images/Skills/massage.png'
import sauna from '@/assets/images/Skills/sauna.png'
import spray from '@/assets/images/Skills/spray.png'

import services_logo1 from '@/assets/images/Services/logo1.png'
import services_logo2 from '@/assets/images/Services/logo2.png'
import services_logo3 from '@/assets/images/Services/logo3.png'

import project1 from '@/assets/images/Projects/img1.png'
import project2 from '@/assets/images/Projects/img2.png'
import project3 from '@/assets/images/Projects/img3.png'
import person_project from '@/assets/images/Projects/person.png'

//Types
import type { Content } from '@/types/content'

//Import icons from react-icons
import { MdArrowForward } from 'react-icons/md'

export const content: Content = {
  hero: {
    title: 'Luxurious Beauty',
    paragraph:
      'Our relaxing boutique studio is located in Georgetown Newcastle and has ample parking easy access. We pride ourselves on treating our client;s individual needs.',
    btnText: 'BOOK NOW',
    image: Hero_person,
    hero_content: [
      {
        count: '20+',
        text: 'Years of Experience in Beautician industries'
      },
      {
        count: '230+',
        text: 'Happy Customers'
      }
    ]
  },
  skills: {
    title: 'Features',
    subtitle: 'OUR SKILLS',
    skill_content: [
      {
        name: 'Massage',
        para: 'Massage Spa is a clean and modern',
        logo: massage
      },
      {
        name: 'Spray Tan',
        para: 'Creating new skin cells',
        logo: spray
      },
      {
        name: 'Facial',
        para: 'Family of skin care',
        logo: facial
      },
      {
        name: 'Infrared Sauna',
        para: 'Long-Lasting health',
        logo: sauna
      },
      {
        name: 'Face Waxing',
        para: 'Changes of ingrown hail',
        logo: face
      },
      {
        name: 'Eyelashes',
        para: 'Edge of the eyelid',
        logo: eye
      }
    ],
    icon: MdArrowForward
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT WE OFFER',
    service_content: [
      {
        title: 'Relaxing Environment',
        para: 'From the moment you walk in the door, our focus is on Relaxation. All our services are tailored to meet each individuals needs.',
        logo: services_logo1
      },
      {
        title: 'High Quality Products',
        para: 'We proudly use and stock Dermalogica skin care, Lash doctor, Sunscape perfection tan, jessica, gloss & co.',
        logo: services_logo2
      },
      {
        title: 'Professionals in Beauty',
        para: 'SPA Skin Beauty Indulgence has been operating since 2002 and owner Kristy has more than 20 years beauty experience.',
        logo: services_logo3
      }
    ]
  },
  projects: {
    title: 'Place',
    subtitle: 'INFRASTRUCTURE',
    image: person_project,
    project_content: [
      {
        title: 'Face Waxing',
        des: 'Free spa massage for young woman with facial mask on face - indoors.',
        image: project1
      },
      {
        title: 'Relaxing',
        des: 'From the moment you walk in the door, our focus is pn Relaxation.',
        image: project2
      },
      {
        title: 'SPA Luxury',
        des: 'Our relaxing boutique studio is located the parking and easy access.',
        image: project3
      }
    ]
  }
}

//Import Images
import Hero_person from '@/assets/images/Hero/person.png'
import eye from '@/assets/images/Skills/eye.png'
import face from '@/assets/images/Skills/face.png'
import facial from '@/assets/images/Skills/facial.png'
import massage from '@/assets/images/Skills/massage.png'
import sauna from '@/assets/images/Skills/sauna.png'
import spray from '@/assets/images/Skills/spray.png'

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
  }
}

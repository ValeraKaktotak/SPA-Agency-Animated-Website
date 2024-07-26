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

import avatar1 from '@/assets/images/Testimonials/avatar1.png'
import avatar2 from '@/assets/images/Testimonials/avatar2.png'
import avatar3 from '@/assets/images/Testimonials/avatar3.png'
import avatar4 from '@/assets/images/Testimonials/avatar4.png'

//Types
import type { Content } from '@/types/content'

//Import icons from react-icons
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { MdArrowForward, MdCall } from 'react-icons/md'
// import { TbSmartHome } from 'react-icons/tb'
// import { BiUser } from 'react-icons/bi'
// import { RiStackFill, RiProjectorLine } from 'react-icons/ri'

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
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis debitis architecto ratione ipsam pariatur aperiam dolorem iure id dolor, repellat quas voluptas aut, omnis quisquam. Magni architecto facere deserunt.',
        img: avatar1,
        name: 'Lopex'
      },
      {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis debitis architecto ratione ipsam pariatur aperiam dolorem iure id dolor, repellat quas voluptas aut, omnis quisquam. Magni architecto facere deserunt.',
        img: avatar2,
        name: 'Thomas'
      },
      {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis debitis architecto ratione ipsam pariatur aperiam dolorem iure id dolor, repellat quas voluptas aut, omnis quisquam. Magni architecto facere deserunt.',
        img: avatar3,
        name: 'Philips'
      },
      {
        review:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis debitis architecto ratione ipsam pariatur aperiam dolorem iure id dolor, repellat quas voluptas aut, omnis quisquam. Magni architecto facere deserunt.',
        img: avatar4,
        name: 'Scott'
      }
    ]
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'FELL FREE TO REACH US',
    social_media: [
      {
        text: 'test@gmail.com',
        icon: GrMail,
        link: 'mailto:test@gmail.com'
      },
      {
        text: '+91 9903 339933',
        icon: MdCall,
        link: 'https://wa.me/123456789'
      },
      {
        text: 'Instagram',
        icon: BsInstagram,
        link: 'https://instagram.com'
      }
    ]
  },
  footer: {
    text: '2024 &copy; Copyrights All Rights Reserved'
  }
}

import { useEffect, type FC } from 'react'

//Layouts
import NavBar from '@/Layouts/NavBar'

//Components
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'

//Animation On Scroll package (aos)
import AOS from 'aos'
import 'aos/dist/aos.css'

const App: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile'
    })
  }, [])

  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <NavBar />
    </div>
  )
}
export default App

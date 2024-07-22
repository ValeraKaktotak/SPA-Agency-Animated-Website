import type { FC } from 'react'

//Layouts
import NavBar from '@/Layouts/NavBar'

//Components
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'

const App: FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}
export default App

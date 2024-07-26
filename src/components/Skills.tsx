import { useState, type FC } from 'react'

//Content
import { content } from '@/Content'

//Types
import type { Skillcontent } from '@/types/content'

//Import React Modal
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%'
  },
  overlay: {
    padding: '2rem'
  }
}

Modal.setAppElement('#root')

const Skills: FC = () => {
  const { skills } = content
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [selectSkill, setSelectSkill] = useState<null | Skillcontent>(null)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <section
      id='skills'
      className='min-h-fit overflow-hidden bg-bg_light_primary'
    >
      {/* Modal Dialog Section */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='flex items-center gap-2'>
          <img
            className='w-10'
            src={selectSkill?.logo}
            alt={selectSkill?.name}
          />
          <h6>{selectSkill?.name}</h6>
        </div>
        <ul className='list-decimal px-4 font-Sen text-xs !leading-7 sm:text-sm'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>

        <div className='flex justify-end'>
          <button onClick={closeModal} className='btn mt-3'>
            Close
          </button>
        </div>
      </Modal>

      {/* Content Section */}
      <div className='container px-5 py-14'>
        <h2 data-aos='fade-down' className='title'>
          {skills.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle mb-3'>
          {skills.subtitle}
        </h4>

        <div className='flex flex-wrap justify-center gap-4'>
          {skills.skill_content.map((skill, i) => (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-delay={i * 300}
              className='group relative flex w-full max-w-sm items-center gap-5 rounded-full bg-white p-5'
            >
              <div>
                <img
                  className='w-10 duration-200 group-hover:scale-125'
                  src={skill.logo}
                  alt={skill.name}
                />
              </div>

              <div>
                <h6>{skill.name}</h6>
                <p className='italic'>{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill)
                    openModal()
                  }}
                  className='absolute right-7 top-7 cursor-pointer text-xl'
                >
                  {skills.icon({})}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills

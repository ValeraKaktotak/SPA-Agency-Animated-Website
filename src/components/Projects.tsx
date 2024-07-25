import type { FC } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//Content
import { content } from '@/Content'

const Projects: FC = () => {
  const { projects } = content

  return (
    <section id='projects' className='bg-bg_light_primary'>
      <div className='flex flex-col px-5 pt-14 md:container'>
        <div>
          <h2 data-aos='fade-down' className='title'>
            {projects.title}
          </h2>
          <h4 data-aos='fade-down' className='subtitle'>
            {projects.subtitle}
          </h4>
        </div>

        <div className='flex flex-col-reverse items-center gap-5 lg:flex-row'>
          <img
            data-aos='fade-right'
            className='min-w-[22rem] max-w-[45vw]'
            src={projects.image}
            alt='Girl'
          />

          <Swiper
            data-aos='fade-left'
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='max-w-xs self-start rounded-3xl pb-16 drop-shadow-primary'
          >
            {projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className='h-fit rounded-3xl border-b-8 border-[#faf9fd] bg-white p-5'
              >
                <img src={content.image} alt={content.title} />
                <div className='mt-2 flex flex-col gap-1'>
                  <h5 className='font-Sen font-bold'>{content.title}</h5>
                  <p>{content.des}</p>
                  <button className='self-end font-bold text-gray'>
                    Read More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
export default Projects

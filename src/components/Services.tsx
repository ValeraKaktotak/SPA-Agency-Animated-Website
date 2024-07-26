import type { FC } from 'react'

//Content
import { content } from '@/Content'

const Services: FC = () => {
  const { services } = content

  return (
    <section id='services'>
      <div className='overflow-hidden px-5 py-14 md:container'>
        <h2 data-aos='fade-down' className='title'>
          {services.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle mb-3'>
          {services.subtitle}
        </h4>

        <div className='group flex flex-wrap justify-between gap-5'>
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos='fade-up'
              data-aos-delay={i * 500}
              className='min-w-[14rem] flex-1 cursor-pointer rounded-xl border-2 border-slate-200 bg-bg_light_primary p-6 text-center duration-300 hover:!blur-none group-hover:blur-sm'
            >
              <img className='mx-auto' src={content.logo} alt={content.title} />
              <h6 className='my-3'>{content.title}</h6>
              <p className='leading-7'>{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services

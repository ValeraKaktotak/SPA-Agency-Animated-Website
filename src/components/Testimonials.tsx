import { useState, type FC } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//Content
import { content } from '@/Content'

const Testimonials: FC = () => {
  const { testimonials } = content
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className='overflow-hidden'>
      <div className='px-5 pt-14 md:container'>
        <h2 data-aos='fade-down' className='title'>
          {testimonials.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle'>
          {testimonials.subtitle}
        </h4>
      </div>

      <Swiper
        data-aos='fade-left'
        direction={'vertical'}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1.7}
        modules={[Pagination]}
        onSlideChange={(e) => {
          setActiveIndex(e.realIndex)
        }}
        className='mt-5 h-[30rem] max-w-3xl md:h-96'
      >
        {testimonials.testimonials_content.map((content, i) => (
          <SwiperSlide key={i}>
            <div
              className={`mx-8 flex h-full flex-col items-center gap-6 rounded-2xl border-2 border-slate-200 bg-bg_light_primary p-4 duration-300 md:flex-row ${activeIndex !== i && 'scale-75 blur-sm'}`}
            >
              <img className='h-24' src={content.img} alt={content.name} />
              <div>
                <p className='line-clamp-4 text-sm sm:text-base'>
                  {content.review}
                </p>
                <h6>{content.name}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Testimonials

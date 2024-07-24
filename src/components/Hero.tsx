import type { FC } from 'react'

//Content
import { content } from '@/Content'

//Types
import type { Content } from '@/types/content'

const Hero: FC = () => {
  const { hero }: Content = content
  return (
    <section id='home'>
      <div className='relative flex min-h-screen flex-col-reverse items-center justify-center overflow-hidden px-2 md:flex-row'>
        {/* Background block BG */}
        <div
          data-aos='slide-left'
          data-aos-delay='1200'
          className='absolute bottom-0 right-0 top-0 -z-10 w-full bg-primaryLinear'
        ></div>

        {/* First Column */}
        <div data-aos='fade-down' className='mr-0 pb-0 pt-5 md:mr-16 md:pb-72'>
          <h2>{hero.title}</h2>
          <p className='mt-5 flex max-w-[500px] justify-end'>
            {hero.paragraph}
          </p>

          <div className='flex justify-start'>
            <button className='btn mt-3'>{hero.btnText}</button>
          </div>

          {/* Data Section */}
          <div className='mt-10 flex flex-col gap-10'>
            {hero.hero_content.map((content, i) => (
              <div
                data-aos='fade-down'
                data-aos-delay={i * 300}
                key={i}
                className={`flex max-w-80 items-center gap-5 ${i === 1 && 'flex-row-reverse text-right'}`}
              >
                <h3 className='text-[66px] font-bold'>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Banner Section */}
        <div className='h-96 md:h-[55rem]'>
          <img
            data-aos='slide-down'
            className='h-full object-cover'
            src={hero.image}
            alt='women'
          />
        </div>
      </div>
    </section>
  )
}
export default Hero

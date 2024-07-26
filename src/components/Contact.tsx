import type { FC } from 'react'

//Content
import { content } from '@/Content'

const Contact: FC = () => {
  const { contact } = content

  return (
    <section id='contact' className='bg-dark_primary'>
      <div className='px-5 py-14 md:container'>
        <h2 data-aos='fade-down' className='title text-white'>
          {contact.title}
        </h2>
        <h4 data-aos='fade-down' className='subtitle'>
          {contact.subtitle}
        </h4>

        <div
          data-aos='fade-down'
          className='mt-4 flex flex-col gap-10 md:flex-row'
        >
          <form className='flex flex-1 flex-col gap-10 text-white'>
            <input
              className='rounded-md border border-slate-200 p-3'
              name='user_name'
              type='text'
              placeholder='Name'
              required
            />
            <input
              className='rounded-md border border-slate-200 p-3'
              name='user_email'
              type='email'
              placeholder='Email ID'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              className='h-44 rounded-md border border-slate-200 p-3'
              required
            ></textarea>
            <button className='btn self-start bg-white text-dark_primary'>
              Submit
            </button>
          </form>

          <div className='flex flex-1 flex-col gap-5'>
            {contact.social_media.map((content, i) => (
              <div
                data-aos='fade-down'
                data-aos-delay={i * 400}
                className='flex items-center gap-2'
                key={i}
              >
                <div className='text-white'>{content.icon({})}</div>
                <a
                  className='font-Sen text-white'
                  href={content.link}
                  target='_blank'
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact

import { useState, type FC } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

//Content
import { content } from '@/Content'

const NavBar: FC = () => {
  const { nav } = content
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [active, setActive] = useState<number>(0)

  return (
    <div className='flex w-full justify-center'>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className='fixed left-10 top-10 z-[999] cursor-pointer rounded-full bg-white/40 p-2 duration-300 hover:bg-white/60'
      >
        <HiMenuAlt3 size={24} />
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-5 rounded-full bg-slate-200/60 px-3 py-3 text-dark_primary backdrop-blur-md duration-300 ${showMenu ? 'bottom-10' : '-bottom-[100%]'}`}
      >
        {nav.map((item, i) => (
          <a
            className={`cursor-pointer rounded-full p-2.5 text-xl hover:bg-dark_primary/10 ${active === i && '!bg-dark_primary text-white'}`}
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
          >
            {item.icon({})}
          </a>
        ))}
      </nav>
    </div>
  )
}
export default NavBar

import React, { useState } from 'react'
import logo from '../assets/icons/aakashlogo.png'
import crossIcon from '../assets/icons/crossicon.png'
import hamburgerIcon from '../assets/icons/hamburgericon.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false)
  const location = useLocation().pathname

  const menuList = [
    { id: 1, name: 'Home', path: '/' },
    {
      id: 2,
      name: 'About Us',
      path: '/aboutus',
    },
    {
      id: 3,
      name: 'News',
      path: '/news',
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
    },
  ]
  return (
    <div className='sticky top-0 left-0 z-10 bg-[#FFFFFF]'>
      <>
        {/* mobile view < 640px*/}
        <nav className='sm:hidden flex flex-row justify-between pb-[15px]  pt-[25px] px-[15px] sm:px-[40px] items-center'>
          <div className='flex flex-row items-center gap-4 '>
            <div>
              <Link to={'/'}>
                <img src={logo} height={40} width={120} alt='logo' />
              </Link>
            </div>
          </div>

          <div onClick={() => setIsSidebar(true)}>
            <img src={hamburgerIcon} alt='icon' height={33} width={33} />
          </div>
        </nav>

        {/* desktop and tablet view ,>640px  */}
        <nav className=' hidden  sm:flex flex-row justify-between py-[15px]  items-center px-[10px] sm:px-[20px]  sm:py-[14px]'>
          <div>
            <Link to={'/'}>
              <img src={logo} height={35} width={100} alt='logo' />
            </Link>
          </div>
          <div className='flex flex-row items-center justify-between gap-1 sm:gap-8'>
            {menuList.map((menu, i) => {
              return (
                <Link
                  key={i}
                  to={menu.path}
                  className={`flex flex-row hover:text-blue-800 items-center justify-between gap-1 cursor-pointer sm:gap-2 ${
                    location === menu.path
                      ? ' border-b-[2px] border-blue-600'
                      : ''
                  } `}
                >
                  <p className='font-[600] text-[14px] tracking-wide leading-[17px]'>
                    {menu.name.toUpperCase()}
                  </p>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* sidebar menu  */}
        <div
          className={
            isSidebar
              ? 'flex flex-col overflow-x-hidden   h-full w-full py-[30px]  fixed z-[999] left-0 top-0 right-0   bg-white transition-all duration-500'
              : 'hidden'
          }
        >
          <div
            onClick={() => setIsSidebar(false)}
            className='flex items-center justify-between px-[20px] pb-[15px]'
          >
            <Link to={'/'}>
              <img src={logo} height={40} width={120} alt='logo' />
            </Link>
            <img src={crossIcon} alt='cross' height={50} width={40} />
          </div>
          {menuList.map((menu, i) => {
            return (
              <Link
                key={i}
                to={menu.path}
                className={`flex flex-row items-center gap-2 py-[20px] px-5  cursor-pointer ${
                  location === menu.path ? 'bg-blue-50 ' : ''
                } `}
                onClick={() => setIsSidebar(false)}
              >
                <p
                  className={`font-[500] text-[19px] tracking-wide  leading-[17px]`}
                >
                  {menu.name}
                </p>
              </Link>
            )
          })}
        </div>
      </>
    </div>
  )
}

export default Navbar

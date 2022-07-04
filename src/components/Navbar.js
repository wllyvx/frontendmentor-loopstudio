import React, { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  let menu
  if(showMenu) {
    menu = (
      <div className='bg-black top-0 left-0 w-full h-screen px-6 py-9 fixed z-50 md:hidden'>
        <div className="flex justify-between items-center">
            <img src="./images/logo.svg" alt="" className="w-36" />
            <img src="./images/icon-close.svg" alt="" onClick={() => setShowMenu(!showMenu)} className="cursor-pointer close-btn" />
        </div>
        <div className="h-full flex flex-col justify-center items-start text-left text-white text-2xl font-josefin uppercase">
            <ul id="menu-items" className='space-y-5'>
                <li><a href="#" className='cursor-pointer hover:underline decoration-2 underline-offset-8'>About</a></li>
                <li><a href="#" className='cursor-pointer hover:underline decoration-2 underline-offset-8'>Careers</a></li>
                <li><a href="#" className='cursor-pointer hover:underline decoration-2 underline-offset-8'>Events</a></li>
                <li><a href="#" className='cursor-pointer hover:underline decoration-2 underline-offset-8'>Products</a></li>
                <li><a href="#" className='cursor-pointer hover:underline decoration-2 underline-offset-8'>Support</a></li>
            </ul>
        </div>
    </div>
    )
  }

  return (
    <nav className="flex justify-between items-center">
        <img src="./images/logo.svg" alt="" className="w-36 sm:w-48" />
        <img src="./images/icon-hamburger.svg" alt="" onClick={() => setShowMenu(!showMenu)} className="cursor-pointer mobile-menu-btn md:hidden" />
        <ul className="hidden md:flex space-x-6 font-alata text-white">
            <li className='cursor-pointer hover:underline decoration-2 underline-offset-8'><a href="#about">About</a></li>
            <li className='cursor-pointer hover:underline decoration-2 underline-offset-8'><a href="#">Careers</a></li>
            <li className='cursor-pointer hover:underline decoration-2 underline-offset-8'><a href="#">Events</a></li>
            <li className='cursor-pointer hover:underline decoration-2 underline-offset-8'><a href="#">Product</a></li>
            <li className='cursor-pointer hover:underline decoration-2 underline-offset-8'><a href="#">Support</a></li>
        </ul>
        {menu}
    </nav>
  )
}

export default Navbar
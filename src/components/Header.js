import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="bg-header-mobile md:bg-header-desktop h-screen md:h-[650px] bg-cover md:bg-cover bg-no-repeat justify-center relative">
        <div id="header-container" className="h-full max-w-[69.5rem] px-6 py-9 md:py-16 m-auto">
          <Navbar />
          <div id="header-container" className="flex h-full items-center">
            <div id="text-container" className="border-2 border-white p-6 md:py-9 w-full md:w-[50%]">
              <div className>
                <h1 className="font-josefin text-white text-4xl md:text-[4.2rem] text-left uppercase leading-9 md:leading-none">Immersive experiences that deliver</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
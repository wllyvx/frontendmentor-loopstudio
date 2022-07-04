import React from 'react'

function About() {
  return (
    <section id="about" className="mt-24 md:mt-40">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start px-6 max-w-[72.5rem] m-auto space-y-11 relative">
          <img src="./images/mobile/image-interactive.jpg" alt="" className="md:w-[45.75rem]" />
          <div className="flex md:block flex-col items-center text-center md:text-left md:pt-24 md:pl-24 space-y-5 md:absolute md:right-[2%] bg-white">
            <h2 className="font-josefin text-[2rem] md:text-5xl uppercase leading-8 md:max-w-[450px]">The leader in interactive VR</h2>
            <p className="font-alata text-very-dark-gray text-[15px] leading-[1.7rem] max-w-[300px] md:max-w-[450px]">
              Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About
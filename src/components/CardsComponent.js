import React from 'react'

function CardsComponent(props) {
  return (
    <div className='relative'>
        <img src={`./images/mobile/${props.img}`} alt="" className='block md:hidden' />
        <img src={`./images/desktop/${props.img}`} alt="" className='hidden md:block' />
        <div className='absolute bottom-0 w-full grow md:max-w-[16rem] h-full flex justify-start items-end p-5 md:py-7 md:px-11 bg-gradient-to-r md:bg-gradient-to-t from-black/60 to-transparent'>
            <p className='font-josefin text-white text-left uppercase text-2xl md:text-3xl leading-6 max-w-[140px]'>{props.title}</p>
        </div>
    </div>
  )
}

export default CardsComponent
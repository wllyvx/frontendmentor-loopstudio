import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-white'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center py-14 md:py-11 mt-24 space-y-12 md:space-y-0 max-w-[69.5rem] mx-auto'>
            <div className='flex flex-col items-center md:items-start justify-center space-y-10 md:space-y-7'>
                <img src="./images/logo.svg" alt="" className='w-36'/>
                <ul className='flex flex-col md:flex-row justify-center text-sm md:text-base font-semibold space-y-5 space-x-0 md:space-y-0 md:space-x-7'>
                    <li><a href="">About</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className='flex flex-col items-center md:items-end space-y-5'>
                <div className='flex space-x-6 md:space-x-4'>
                    <img src="./images/icon-facebook.svg" alt="" />
                    <img src="./images/icon-twitter.svg" alt="" />
                    <img src="./images/icon-pinterest.svg" alt="" />
                    <img src="./images/icon-instagram.svg" alt="" />
                </div>
                <p className='text-dark-gray'>© 2021 Loopstudios. All rights reserved.</p>
                <div className='text-sm md:text-base'>
                    Challenge by <a className='font-bold' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a className='font-bold' href="https://github.com/wllyvx" target="_blank">Willy Fajar Ramadhan</a>.
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
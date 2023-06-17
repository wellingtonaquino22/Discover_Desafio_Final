
'use client'

import { useState } from 'react';
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsMoonStars } from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'
export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      document.body.style.backgroundImage = 'linear-gradient(to bottom, white, lightblue)';
    } else {
      document.body.style.backgroundImage = 'linear-gradient(to bottom, black, darkblue)';
    }
  };
  


  return (
    <>
      <div className={`flex flex-col items-center justify-center space-y-4 font-medium m-auto py-4 ${isClicked ? 'bg-black text-white' : 'text-black'}`}>
        <div className=" flex flex-col justify-center items-center space-y-5">
          <img className="rounded-full w-32 h-32 border-solid border-2 border-zinc-500" src="https://avatars.githubusercontent.com/u/82858995?s=400&u=ef63b8bfcfb9575fd094d822481981656b3cdacd&v=4" alt="" />
          <h1 className={`text-center`}>Wellington Aquino</h1>
        </div>
        <div className='flex relative'>
          <button
            onClick={handleClick}
            className={`absolute translate-y-[-50%] top-1/2 bg-blue-500 text-black rounded-full p-2 
            ${isClicked ? 'slide-in-animation' : 'slide-out-animation'}
            `}
            style={{ left: isClicked ? '50%' : '' }}
          >
            {isClicked ? <BsMoonStars /> : <FaSun/>}
            
          </button> 
          <span className={`w-16 h-6 p-3 rounded-full ${isClicked ? 'border border-solid border-white': 'border border-solid border-black'} `}></span>
        </div>
        <section className="flex flex-col space-y-5 text-lg">
          <button className="border-solid border border-zinc-400 rounded-lg p-3 px-44">...</button>
          <button className="border-solid border border-zinc-400 rounded-lg p-3 px-44">...</button>
          <button className="border-solid border border-zinc-400 rounded-lg p-3 px-44">...</button>
          <button className="border-solid border border-zinc-400 rounded-lg p-3 px-44">...</button>
        </section>
        <section className=' flex space-x-10 py-10'>
          <button className=' flex justify-center items-center w-8 h-8'>
            <AiFillGithub className='w-20 h-20' />
          </button>
          <button className=' flex justify-center items-center w-8 h-8'>
            <AiOutlineInstagram className='w-20 h-20' />
          </button>
          <button className=' flex justify-center items-center w-8 h-8'>
            <AiFillLinkedin className='w-20 h-20' />
          </button>
        </section>
      </div>
    </>
  )
}

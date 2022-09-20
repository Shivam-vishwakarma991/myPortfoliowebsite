import React from 'react'
import { AiFillLinkedin, AiFillGithub,AiOutlineTwitter,AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
        <p className='uppercase text-sm tracking-widest text-gray-600'> let's build something together</p>
        
        <h1 className='py-4 text-gray-700'> Hey, I'm <span className= 'text-[#5651e5]'>Shivam </span> </h1>

        <h1 className='py-25 uppercase text-[200%] text-gray-700'> A blockchain developer</h1>

        <p className='py-4 text-gray-700 max-w-[70%] m-auto'>I'm a fourth year Mechanical Engineering student excited and passionate about Blockchain, Web3.0 and upcoming new technologies. </p>

        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

        <a
              href="https://www.linkedin.com/in/shivam-vishwakarma-a26562204/"
              target="_blank"
              rel="noreferrer"
            >

          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
            <RiLinkedinFill />
          </div>
          </a>


          <a
              href="https://github.com/Shivam-vishwakarma991"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiFillGithub />
          </div>
          </a>
          <a
              href="https://twitter.com/shivamv49903692"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineTwitter />
          </div>
          </a>
          <a
              href="mailto: shivamvishwakarma212@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
          <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
          <AiOutlineMail />
          </div>
          </a>

        </div>

        
          </div>
        </div>
    </div>
  )
}

export default Main
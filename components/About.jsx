import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <h2 className='py-4 '>Who I Am</h2> 
                
                <p>Hello, I'm a final year Mechanical engineering student from Bhopal Madhya Pradesh, who is Passionate about Blockchain Technology. So what made a non-tech branch student fall in love with computers you ask? The simple answer to that would be my hunt for different opportunities in the Tech field.</p>
                
                <p className='py-2'> My journey of tech started with learning the basics of frontend development 
            with HTML and CSS and javascript.Fascinated with how intricate programming can be I was quickly drawn
            to learn more, along the way I came across with Blockchain technology and now that mechanical engineer is on his way to become a successfull Blockchain developer. It's been more than a year now since I started learning the decentralized world. In this passage of time I made myself familiar with both front-end and blockend development, to get the hands on experence I spend most of my time crafting and working on awesome projects and learning new technologies along the way.</p>
                <Link href='/#projects'>
                <p  className='py-2 text-gray-600 cursor-pointer underline'>Check out some of my latest projects</p>
                </Link>
              </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                  <img className=' rounded-bl-3xl rounded-tr-3xl'  src= "/pic.jpg" />
                </div>
        </div>
    </div>
  )
}

export default About
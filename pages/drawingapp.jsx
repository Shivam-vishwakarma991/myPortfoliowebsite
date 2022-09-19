import React from 'react'
import Image from 'next/image'
import draw from '../public/assets/project/drawing.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'


const drawingapp = () => {
  return (
    <div className='w-full'> 
    <div className='w-screen h-[50vh] relative'>
       <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={draw}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Drawing Application</h2>
          <h3> </h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        
        <p className='py-3'>
             A small Drawing Application using HTML canvas to draw graphics, <br/>
             The canvas element is only a container for graphics. So I've used JavaScript to actually draw the graphics. <br />
             For Styling simple CSS is used.

        </p>
 

<a href='https://shivam-vishwakarma991.github.io/Drawing-App-HTML-Canvas/'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>



<a href='https://github.com/Shivam-vishwakarma991/Drawing-App-HTML-Canvas'>
<button className='px-8 py-2 mt-4 '>Code</button>
</a>
          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  HTML
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  CSS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Javascript
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  HTML canvas
              </p>

                   
       </div>
      </div>
      </div>
      <Link href='/#projects' >
      <p className=' px-2 text-bold underline cursor-pointer'>Back</p>
    </Link>


    </div>
    



  </div>
  </div>
  )
}

export default drawingapp
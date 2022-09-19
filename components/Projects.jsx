import Image from 'next/image'
import React from 'react'
import krypt from '../public/assets/project/krypt.png'
import Link from 'next/link'
import ProjectItems from './ProjectItems'
import drawingapp from '../public/assets/project/drawing.png'
import portfolio from '../public/assets/project/portfolio.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects </p>
        <h2 className='py-4'>Have a look at what I've built</h2>

        <div className='grid md:grid-cols-2 gap-8'>

         <ProjectItems 
         title= 'Krypto wallet'  
         background= {krypt} 
         techstackUsed= 'ReactJS and Tailwindcss'
         projectUrl= {'/kryptproject'}
         />

<ProjectItems 
         title= 'Drawing Board'  
         background= {drawingapp} 
         techstackUsed= 'Html Canvas & Css'
         projectUrl= {'/drawingapp'}
         />

<ProjectItems 
         title= 'Portfolio'  
         background= {portfolio} 
         techstackUsed= 'NextJs & TailwindCss'
         projectUrl= {'/portfolio'}
         />


        </div>

      </div>
    </div>
  )
}

export default Projects
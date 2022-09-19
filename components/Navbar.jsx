import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu,AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/Ri'



const Navbar = () => {

  const[nav, setnav] = useState(false)
  const[shadow, setshadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')

  const handleNav = () =>
  {
    setnav(!nav)
  }

  useEffect(() => {

    const handleshadow =()=>{
      if (window.scrollY >=90){
        setshadow(true);
      }
      else {
        setshadow(false);
      }
    }
    window.addEventListener('scroll', handleshadow);

  }, []);
  return (
    <div style={{backgroundColor : `${navBg}`}} className= {shadow? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center  w-full h-full px-2 2xl:px16'>
          
        <Link href= '/'>
          <a>
        <Image src= '/../public/assets/SVlogo.png' alt="/" width='110' height='65' /> </a>
        </Link>
       
        
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href= '/'>
              <li className='ml-10 text-sm uppercase hover:border-t'> home</li> 
            </Link>
            <Link href= '/#about'>
              <li className='ml-10 text-sm uppercase hover:border-t'> about</li> 
            </Link>
            <Link href= '/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-t'> skills</li> 
            </Link>
            <Link href= '/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-t'> projects</li> 
            </Link>
            <Link href= '/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-t'> contact</li> 
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={23} />
          </div>
          
        </div>
        </div>
        <div className=
        {nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
          <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between '>
              
              <Link href='/'>
              <Image src= '/../public/assets/SVlogo.png' 
              alt="/" width='87' height='45'
               />
              </Link>

              <div onClick={handleNav} className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'> Let's build something legendary together </p>
            </div>
          </div> 

          <div className='py-4 flex flex-col'> 
            <ul >
              <Link href='/'>
                <li onClick={() => setnav(false)} className='py-4 text-sm uppercase hover:border-t'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setnav(false)} className='py-4 text-sm uppercase hover:border-t'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setnav(false)} className='py-4 text-sm uppercase hover:border-t'>skills</li>
              </Link>
              <Link href='/#projects'> 
                <li onClick={() => setnav(false)} className='py-4 text-sm uppercase hover:border-t'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setnav(false)} className='py-4 text-sm uppercase hover:border-t'>Contact</li>
              </Link>
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5] '>
                Let's connect
              </p>

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
          
        </div>
    </div>
  )
}

export default Navbar
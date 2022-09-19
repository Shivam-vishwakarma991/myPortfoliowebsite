import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4 '>What I can do</h2>
            <h2 className='py-0 text-xl '>Programming Languages I know</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* <div>
                <h2 className='py-0 text-xl '>Programming Languages I know</h2>
                </div> */}

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/c++LOGO.webp' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>C++</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/soliditylogo.webp' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>SOLIDITY</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/htmllogo.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>HTML</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/csslogo.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>CSS</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/javascriptlogo.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <h2 className='py-6 text-xl '>Frameworks || Libraries I know</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/reactLOGO.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>REACTJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/tailwindLOGO.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>TAILDWINDCSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/ETHERJSlogo.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center '>ETHERJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/web3jsLOGO.webp' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>WEB3JS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/NODEJSLOGO.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>NODEJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/truffleLOGO.webp' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>TRUFFLE</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Frameworks/HARDHATLOGO.png' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>HARDHAT</h3>
                        </div>
                    </div>
                </div>
                
            </div>

            <h2 className='py-6 text-xl '>Tools I am Familiar with</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Tools/REMIX.PNG' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>REMIX IDE</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Tools/INFURA.WEBP' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>INFURA</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Tools/GANACHE.WEBP' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>GANACHE</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/Tools/METAMASK.WEBP' width='64px' height='64px' 
                            alt="/" 
                        />
                        </div>
                        <div>
                            <h3 className='flex flex-col items-center justify-center'>METAMASK</h3>
                        </div>
                    </div>
                </div>

                </div>
            </div>


        </div>
        </div>
  )
}

export default Skills
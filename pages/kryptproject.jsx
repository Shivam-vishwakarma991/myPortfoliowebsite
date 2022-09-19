import React from 'react'
import Image from 'next/image'
import krypt from '../public/assets/project/krypt.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'


const kryptproject = () => {
  return (
    <div className='w-full'> 
    <div className='w-screen h-[50vh] relative'>
       <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={krypt}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Krypto Wallet</h2>
          <h3>React JS / TailwindCss / Ethereum Blockchain</h3>
        </div>
      </div>

      <div  className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>

        <div className='col-span-4'>

        <p className=' text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2 >Overview</h2>
        <ul>
        <p className='py-3'> My first full-fledged project in blockchain domain this is basically a Web 3.0 platform that allows users to send Ethereum through the blockchain by connecting the Metamask wallet. This Dapp(Decentralized Application) is called Krypt, it's a completely responsive crypto wallet deployed on Goerli testnet where a user can make secure and easy transactions, it transfers Ether over other addresses anywhere across the globe.</p>
 During the making of this project I got to learn about alot of new things some of the major take-away from this project was that I got the clear idea of
<li> How to integrate Dapp's frontend with smart contracts using a React/node.js stacks.</li>
 <li> Learned how to use Hardhat(Development environment) to write smart contracts on the Ethereum network using Solidity programming language.</li>
<li> How to interact with smart contract and how to connect to Ethereum: Metamask using Ether.js.</li>
<li> How to use Infura to get access to the Ethereum Network.</li>
<li>Got the deep understanding of react hooks and  TailwindCSS.</li>

<p>As challenging as it was to implement this project, Being my first Decentralised application, I was able to explore a lot about blockchain development, Solidity Smart contracts, Metamask and all other Technologies.</p>
</ul>

<a href='https://github.com/Shivam-vishwakarma991/Ether-Transfer'>
<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
</a>
<a href='https://github.com/Shivam-vishwakarma991/Ether-Transfer'>
<button className='px-8 py-2 mt-4 '>Code</button>
</a>
          

      </div>

      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1' >
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  ReactJS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  TailwindCSS
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Solidity
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Hardhat
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Infura
              </p>

              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill  className='pr-1'/>  Web3Js, <br/>EtherJs
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

export default kryptproject
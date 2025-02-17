import React from 'react'
import Image from 'next/image'
import { Fullscreen } from 'lucide-react'

const Asguardsofa = () => {
  return (
    <div>
      <div className='bg-[#FFF9E5] h-[639px] w-full flex'>
        <div className='flex'>
            <Image className='h-auto' src='/asguardsofa.png' alt="asguard sofa" height={639} width={1920} />
        </div>
        <div className='flex justify-center items-center m-40'>
            <div className='text-center'>
            <h3 className='font-bold text-2xl'>New Arrivals</h3>
            <h1 className='font-bold text-4xl mt-4'>Asguard Sofa</h1>
            <button className='border-black border-2 mt-4 p-3 px-8 text-xl'>Order Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Asguardsofa

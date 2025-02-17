import React from 'react'

const Hero = () => {
  return (
    <div className='h-[900px] bg-[#FBEBB5] flex justify-between items-center gap-8'>
        {/* left section*/}
        <div className='flex flex-col pl-[202px] gap-6'>
            <h1 className='font-bold text-5xl '>Rocket Single <br/> Seater</h1>
            <a href='/shop' className='underline text-lg font-medium hover:no-underline'>Shop Now</a>
        </div>
        {/*Right Section*/}
        <div>
        <img src='sofa.png' alt='sofa' className='h-[1000px] w-[753px] object-cover transform scale-x-[-1]'/>
        </div>
    </div>
  )
}

export default Hero

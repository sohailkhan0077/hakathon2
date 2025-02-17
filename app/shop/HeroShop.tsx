import { Link } from 'lucide-react'
import React from 'react'

const HeroShop = () => {
  return (
    <div className="relative w-full h-[316px]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#FAF4F4] bg-opacity-50"
        style={{
          backgroundImage: 'url("/Heroshop.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '50'
        }}
      >
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <img className='h-[77px] w-[77px]' src='Heroshoplogo.png'></img>
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-gray-900 font-bold">Home</span>
          <span>{'>'}</span>
          <span className="text-gray-900">Shop</span>
        </div>
    </div>
    </div>
  )
}

export default HeroShop

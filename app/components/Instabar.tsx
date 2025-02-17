import React from 'react'

const Instabar = () => {
  return (
    <div className="relative w-full h-[450px]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#FAF4F4] bg-opacity-50"
        style={{
          backgroundImage: 'url("/insta.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      {/* Text Overlay - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h2 className="text-4xl font-bold mb-4">Our Instagram</h2>
        <p className="text-lg mb-6">Follow our store on Instagram</p>
        <button className="bg-[#0000001A] shadow-slate-600 px-12 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Follow Us
        </button>
      </div>
    </div>
  )
}

export default Instabar

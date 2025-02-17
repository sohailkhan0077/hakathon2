import React from 'react'
import { Clock, Calendar } from 'lucide-react';

const Ourblogs = () => {
  return (
    <div>
      <section className="">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex justify-center">
      <div className="py-6 mb-6 text-center">
        <h1 className=" text-centersm:w-2/5 text-gray-900 font-bold title-font text-4xl mb-2 sm:mb-0">
          Our Blogs
        </h1>
        <p className="mt-3 text-gray-500">
        Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="blog1.jfif"
          />
        </div>
        <p className="text-base text-center leading-relaxed mt-5">
        Going all-in with millennial design
        </p>
        <h2 className="text-xl text-center text-slate-950  mt-5">
        <a href="#" className="flex flex-col items-center mt-4">
        <span className="text-lg">Read More</span>
        <span className="w-16 h-0.5 mt-1 bg-black"></span>
      </a>
        </h2>
          {/* Metadata Row */}
      <div className="flex items-center gap-4 text-gray-600 mt-4 justify-center">
        {/* Duration */}
        <div className="flex items-center gap-1">
          <Clock size={18} />
          <span>5 min</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <Calendar size={18} />
          <span>12th Oct 2022</span>
        </div>
      </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="blog2.jfif"
          />
        </div>
        <p className="text-base text-center leading-relaxed mt-5">
        Going all-in with millennial design
        </p>
        <h2 className="text-xl text-center text-slate-950 mt-5">
        <a href="#" className="flex flex-col items-center mt-4">
        <span className="text-lg">Read More</span>
        <span className="w-16 h-0.5 mt-1 bg-black"></span>
      </a>
        </h2>
         {/* Metadata Row */}
      <div className="flex items-center gap-4 text-gray-600 mt-4 justify-center">
        {/* Duration */}
        <div className="flex items-center gap-1">
          <Clock size={18} />
          <span>5 min</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <Calendar size={18} />
          <span>12th Oct 2022</span>
        </div>
      </div>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="blog3.jfif"
          />
        </div>
        <p className="text-base text-center leading-relaxed mt-5">
        Going all-in with millennial design
        </p>
        <h2 className="text-xl text-center text-slate-950 mt-3">
        <a href="#" className="flex flex-col items-center mt-4">
        <span className="text-lg">Read More</span>
        <span className="w-16 h-0.5 mt-1 bg-black"></span>
      </a>
        </h2>
         {/* Metadata Row */}
      <div className="flex items-center gap-4 text-gray-600 mt-4 justify-center">
        {/* Duration */}
        <div className="flex items-center gap-1">
          <Clock size={18} />
          <span>5 min</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <Calendar size={18} />
          <span>12th Oct 2022</span>
        </div>
      </div>
      </div>
    </div>
    <div className='text-center mt-9 text-xl font-bold underline'>View All Post</div>
  </div>
</section>

    </div>
  )
}

export default Ourblogs

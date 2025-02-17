import React from 'react'
import Image from 'next/image'

const Toppics1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className=" w-full mb-10 text-center mx-72">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Top Pics For You
        </h1>
        <div className="h-1 w-20" />
      </div>
      <p className="lg:w-1/2 w-full text-gray-500">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 ">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/tp1.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Trenton modular sofa_3
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 25,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/tb2.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Granite dining table with dining chair
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 25,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/tp3.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Outdoor bar table and stool
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 25,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/tp4.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Plain console with teak mirror
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 25,000.00
          </h2>
        </div>
      </div>
    </div>
    <div className='text-center font-bold underline'>View More</div>
  </div>
</section>

    </div>
  )
}

export default Toppics1
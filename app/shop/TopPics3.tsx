import React from 'react'
import Image from 'next/image'

const TopPics3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className=" w-full mb-10 text-center mx-72">
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 ">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics9.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Plain console_
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 258,200.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics10.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Reclaimed teak Sideboard
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 20,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-contain object-center mb-6"
            src="/toppics11.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          SJP_0825 
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 200,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics12.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Bella chair and table
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 100,000.00
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default TopPics3
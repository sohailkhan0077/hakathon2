import React from 'react'
import Image from 'next/image'

const TopPics2 = () => {
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
            src="/toppics5.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Grain coffee table
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 15,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics6.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Kent coffee table
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 225,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics7.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Round coffee table_color 2
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 251,000.00
          </h2>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="/toppics8.png"
            alt="content"
            height={50}
            width={100}
          />
          
          <p className="leading-relaxed text-base">
          Reclaimed teak coffee table
          </p>
          <h2 className="text-lg text-gray-900 font-bold title-font mt-4">
            Rs. 25,200.00
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default TopPics2
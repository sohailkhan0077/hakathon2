import React from 'react';
import Image from 'next/image';

// Featured Tables Component
const Sidetables = () => {
  return (
<div className='w-full'>
  <div className='bg-[#FAF4F4] h-[672px] flex justify-around'>
    <div className='h-[562px] w-[605px] ml-24'>
      <div>
        <Image alt='sidetable1' src='/sidetable1.png' height={562} width={672} />
        <h3 className='text-3xl ml-20 -mt-9'>Side Table</h3>
        <p className='mt-5 ml-20 underline'><a>view more</a></p>
      </div>
    </div>
    <div className='h-[562px] w-[605px] ml-32'>
    <Image alt='sidetable2' src='/sidetable2.png' height={562} width={672} className='w-96 ml-24' />
      <h3 className='text-3xl ml-20 mt-14'>Side Table</h3>
        <p className='mt-5 ml-20 underline'><a>view more</a></p>
    </div>
  </div>
</div>
  ); 
};
export default Sidetables
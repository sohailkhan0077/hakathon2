import React from 'react';

// Featured Tables Component
const Sidetables = () => {
  return (
<div className='w-full'>
  <div className='bg-[#FAF4F4] h-[672px] flex justify-around'>
    <div className='h-[562px] w-[605px] ml-24'>
      <div>
        <img className='' src='sidetable1.png'></img>
        <h3 className='text-3xl ml-20 -mt-9'>Side Table</h3>
        <p className='mt-5 ml-20 underline'><a>view more</a></p>
      </div>
    </div>
    <div className='h-[562px] w-[605px] ml-32'>
      <img className='w-96 ml-24' src='sidetable2.png'></img>
      <h3 className='text-3xl ml-20 mt-14'>Side Table</h3>
        <p className='mt-5 ml-20 underline'><a>view more</a></p>
    </div>
  </div>
</div>
  );
};
export default Sidetables
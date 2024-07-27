
"use client";

import React from 'react';

const Languages = () => {
  return (
    <div className='w-full px-4 dark:bg-backdarkdm h-[30rem] '>
        <div className='  max-w-[70rem] mx-auto'>
            <h2 className='font-bold text-2xl md:text-3xl text-black dark:text-darkinnercolorlm text-center'>Languages</h2>
      <div className='mb-6  mx-auto'>
        <h3 className='mb-2 font-bold text-2xl md:text-2xl text-black dark:text-dark-text  ml-2'>Portuguese</h3>
        <div className='bg-gray-300 dark:bg-gray-800 relative h-4 w-full rounded-2xl' title='Native'>
          <div className='bg-black absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-2xl text-xs font-semibold text-white'>
            100%
          </div>
        </div>
      </div>
      <div className='mb-6 max-w-[70rem] mx-auto'>
        <h3 className='mb-2 font-bold text-2xl md:text-2xl text-black dark:text-white ml-3'>English</h3>
        <div className='bg-gray-300 dark:bg-gray-800 relative h-4 w-full rounded-2xl' title='Proficient'>
          <div className='bg-blue-600 absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white'>
            80%
          </div>
        </div>
      </div>
      <div className='mb-2 max-w-[70rem] mx-auto'>
        <h3 className='mb-2 font-bold text-2xl md:text-2xl text-black dark:text-white ml-3'>Changana</h3>
        <div className='bg-gray-300 dark:bg-gray-800 relative h-4 w-full rounded-2xl' title='Intermediate'>
          <div className='bg-green-600 absolute top-0 left-0 flex h-full w-[60%] items-center justify-center rounded-2xl text-xs font-semibold text-white'>
            60%
          </div>
        </div>
      </div>
      <div className='mb-2 max-w-[70rem] mx-auto'>
        <h3 className='mb-3 font-bold text-2xl md:text-2xl text-black dark:text-white ml-3'>Spanish</h3>
        <div className='bg-gray-300 dark:bg-gray-800 relative h-4 w-full rounded-2xl' title='Basic'>
          <div className='bg-red-600 absolute top-0 left-0 flex h-full w-[20%] items-center justify-center rounded-2xl text-xs font-semibold text-white'>
            20%
          </div>
        </div>
      </div>
      <div className='max-w-[70rem] mx-auto'>
        <h3 className='mb-3 font-bold text-2xl md:text-2xl text-black dark:text-white ml-3'>French</h3>
        <div className='bg-gray-300 dark:bg-gray-800 relative h-4 w-full rounded-2xl' title='Basic'>
          <div className='bg-red-600 absolute top-0 left-0 flex h-full w-[20%] items-center justify-center rounded-2xl text-xs font-semibold text-white'>
            20%
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Languages;

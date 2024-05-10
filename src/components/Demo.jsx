import React from 'react';

const Demo = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-16 bg-green-0 flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-8 lg:px-16 '>
      <h2 className="text-center text-gray-700 text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">Pellentesque suscipit <br /> fringilla libero eu.</h2>

      <button className="bg-green-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-md shadow-md hover:bg-green-700 transition duration-300 flex items-center">
        Get a Demo
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};

export default Demo;

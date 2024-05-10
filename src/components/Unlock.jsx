import React from 'react';
import rafiki from '../assets/images/rafiki.png';

const Unlock = () => {
  return (
    <div className="bg-white px-4 py-8 md:px-10 md:py-16 lg:px-20 lg:py-24 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6"> {/* Reduced margin */}
        <img src={rafiki} alt="" className='pl-10 pt-2'/>
      </div>

      <div className="md:w-4/6 ml-12 mr-20"> {/* Adjusted right padding and increased margin from the right */}
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-800">The unseen of spending three years  at Pixelgrade</h1>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis  pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded">Learn More</button>
      </div>
    </div>
  );
}

export default Unlock;

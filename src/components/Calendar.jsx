import React from 'react';
import pana from '../assets/images/pana.png';

const Calendar = () => {
  return (
    <div className="bg-white px-4 py-8 md:px-10 md:py-16 lg:px-20 lg:py-24 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
        <img src={pana} alt="" className='pl-10 pt-2'/>
      </div>

      <div className="md:w-4/6 ml-12 mr-20"> 
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 text-gray-800">How to design your site footer like we did</h1>
        <p className="text-gray-600 mb-4">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded">Learn More</button>
      </div>
    </div>
  );
}

export default Calendar;

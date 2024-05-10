import ClientImage from '../assets/images/Clients.png';
import React from 'react';

const Clients = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white py-10 px-24'>
      <h2 className='text-3xl font-bold mb-4 text-gray-700'>Our Clients</h2>
      <p className='text-lg text-center mb-4 text-gray-600'>We have been working with some Fortune 500+ clients</p>
      <img src={ClientImage} alt="Client Logos" className='max-w-[80%] mx-auto' />
    </div>
  );
}

export default Clients;

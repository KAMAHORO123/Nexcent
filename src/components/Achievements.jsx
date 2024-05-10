import React from 'react';
import heads from '../assets/images/heads.png';
import star from '../assets/images/star.png';
import hands from '../assets/images/hands.png';
import bag from '../assets/images/bag.png';

const Achievements = () => {
  return (
    <div className="bg-green-0 p-8 md:ml-10 lg:ml-20 xl:ml-40">
      <div className="flex flex-col md:flex-row justify-center md:justify-between  items-center mb-8">
        <div className="md:w-1/2">
          <h2 className="font-semibold text-gray-800 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4">Helping a local <br /><span className="text-green-600">business reinvent itself</span></h2>
          <p className="text-gray-600">We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:w-1/2">
          <div className="flex items-center justify-center p-2 gap-4">
            <img src={heads} alt="" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">2,245,341</h1>
              <p className="text-gray-600">Members</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2 gap-4">
            <img src={hands} alt="" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">46,328</h1>
              <p className="text-gray-600">Clubs</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <img src={star} alt="" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">828,867</h1>
              <p className="text-gray-600">Event bookings</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <img src={bag} alt="" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">1,926,436</h1>
              <p className="text-gray-600">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

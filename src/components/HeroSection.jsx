import React, { Fragment } from 'react';
import illustration from '../assets/images/Illustration.png';
import activeDot from '../assets/images/active dot.png';
import inactiveDot from '../assets/images/inactive dot.png'

const HeroSection = () => {
  return (
    <Fragment>
        <div className="flex flex-row justify-center items-center px-24 py-20">
            <div className="max-w-3xl text-center md:text-left"> 
                <h1 className="text-7xl font-semibold mb-4 text-gray-600 max-w-3xl">Lessons and insights <span className='text-green-700'>from 8 years</span></h1>
                <p className="text-gray-600 mb-8">Where to grow your businesses as a photographer: site or social media</p>
                <button className="bg-green-600 hover:bg-green-600 text-white py-3 px-8 rounded">
                    Register
                </button>
            </div>

            <div className="relative md:block ... hidden"> {/* Added relative positioning */}
                <img src={illustration} alt="Illustration" className="h-auto w-auto" />
            </div>
        </div>

        <div className='flex items-center justify-center gap-3 mb-7'>
            <img src={activeDot} alt="" />
            <img src={inactiveDot} alt="" />
            <img src={inactiveDot} alt="" />
        </div>
    </Fragment>
  );
}

export default HeroSection;

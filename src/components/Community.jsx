import React from 'react';
import Icon from '../assets/images/Icon.png';
import Icon2 from '../assets/images/Icon2.png';
import Icon3 from '../assets/images/Icon3.png';

const Community = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-white py-20 px-20 text-center'>
        <h2 className='text-3xl font-bold mb-4 text-gray-800 max-w-3xl'>Manage your entire community <br />in a single system</h2>
        <p className='text-lg text-gray-600 mb-4'>Who is Nextcent suitable for?</p>
      </div>

      <div className='flex items-center px-12 py bg-white flex-wrap gap-40 justify-center '>
        {/* First Icon */}
        <div className='rounded-[calc(1.5rem-1px)] bg-white shadow-md max-w-[300px] pt-7 pb-3 px-5 gap-2 h-80' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src={Icon} alt="icon" className="mx-auto" />
          <h2 className="text-center my-4 text-3xl font-bold text-gray-700 max-w-1xl truncate ">Membership <br />Organisation</h2>
          <p className="text-center max-w-2xl h-[3em]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        {/* Second Icon */}
        <div className='rounded-[calc(1.5rem-1px)] bg-white shadow-md max-w-[300px] pt-7 pb-3 px-5 gap-2 h-80' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src={Icon2} alt="icon-2" className="mx-auto" />
          <h2 className="text-center my-4 text-3xl font-bold text-gray-700 max-w-1xl truncate">National <br />Associations</h2>
          <p className="text-center max-w-2xl h-[3em]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        {/* Third Icon */}
        <div className='rounded-[calc(1.5rem-1px)] bg-white shadow-md max-w-[300px] pt-7 pb-3 px-5 gap-2 h-80 ' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src={Icon3} alt="icon-3" className="mx-auto" />
          <h2 className="text-center my-4 text-3xl font-bold text-gray-700 max-w-1xl truncate">Clubs and <br />Groups</h2>
          <p className="text-center max-w-2xl h-[3em]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  );
}

export default Community;

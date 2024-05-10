import React from "react";
import pc from "../assets/images/pc.png";
import comp from "../assets/images/comp.png";
import relax from "../assets/images/relax.png";

const UpdatesCards = () => {
  return (
    <div className="bg-white relative">
      {/* Titles and Readmore */}
      <div className="flex flex-col items-center bg-white py-5 md:py-10 px-5 md:px-20 text-center"> {/* Adjusted padding */}
        <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-4 text-gray-900 max-w-md md:max-w-3xl">
          Caring is the new marketing
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-2 mx-5 md:mx-72">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      {/* Images */}
      <div className="flex flex-col md:flex-row justify-center md:gap-16 relative">
        <div className="relative mb-8 md:mb-0 w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={relax} alt="" className="w-full" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-60 bg-green-50  shadow-md max-w-[300px] p-5 pb-8 mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-green-600">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-8 md:mb-0 w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={pc} alt="" className="w-full" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-60 bg-green-50 shadow-md max-w-[300px] p-5 pb-8 mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-green-600">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-auto md:max-w-[300px]"> {/* Adjusted width */}
          <img src={comp} alt="" className="w-full" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="rounded-lg mt-60 bg-green-50 shadow-md max-w-[300px] p-5 pb-8 mx-auto md:mx-5"> {/* Adjusted margin */}
              <p className="text-center max-w-md md:max-w-2xl text-gray-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="text-green-600">Readmore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default UpdatesCards;

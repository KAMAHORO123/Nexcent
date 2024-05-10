import React from "react";
import pod from "../assets/images/pod.png";
import Frame from "../assets/images/Frame.png";

const Customers = () => {
  return (
    <div className="bg-green-0 pt-0 px-4 py-8 md:px-10 md:py-16 lg:px-20 lg:py-24 flex flex-col md:flex-row items-center pt">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
        <img src={pod} alt="" className="pl-10 pt-2" />
      </div>

      <div className="md:w-4/6 ml-12 md:mr-20 pt-0">
        <p className="text-gray-600 mb-2">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <h1 className="font-bold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl mb-4 text-green-600">
          Tim Smith
        </h1>
        <p className="text-gray-500">British Dragon Boat Racing Association</p>
        <br />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-0 font-semibold text-green-600 text-bold">
          <img src={Frame} alt="" className="md:mr-4 h-10" />
          <h2 className="pt-1 text-xs md:text-sm lg:text-base xl:text-lg">Meet all Customers </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-500 pt-0"
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
  );
};

export default Customers;

export default function Services() {
  return (
    <div className="w-full h-[90%] bg-[#181818] md:px-20 py-5">
      <div className=" text-[#008dc7] text-sm flex tracking-widest justify-center md:justify-start">
        <svg
          className="w-10 h-6 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14"
          />
        </svg>

        <span>OUR SERVICES</span>
      </div>
      <div className="flex flex-col md:flex-row md:px-10 py-5 justify-between items-center gap-10">
        <h2 className="md:flex-2 text-white text-center md:text-left text-[35px] md:text-[50px] font-bold md:leading-13 leading-10 items-center md:pr-10 px-3 md:px-0">
          We Provide Professional Auto Detailing Services
        </h2>
        <div>
          <button className="md:flex-1 text-white bg-[#008dc7] px-10 py-2 rounded cursor-pointer text-[14px]">
            SEE ALL SERVICES
          </button>
        </div>
      </div>

      <div className="flex gap-5 flex-col md:flex-row justify-between px-5 pt-10">
        <div className="overflow-hidden w-full flex-1 flex flex-col items-center bg-white shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <div
            className={`bg-[url(https://car-mc.com/wp-content/uploads/2023/09/10-cheap-ways-to-detail-your-car-like-a-pro-6103daf03f157.jpg)] bg-cover bg-center w-full h-52 md:h-full md:w-[80%]  transition duration-300 hover:scale-110`}
          ></div>
          <div className="flex flex-col justify-between md:p-6 leading-normal w-full px-6 py-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Interior Detailing
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <button className="border border-[#008dc7] text-[#008dc7] py-2 w-[150px] mt-2 text-[14px] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-full flex-1 flex flex-col items-center bg-white shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <div
            className={` bg-[url(https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg?semt=ais_hybrid&w=740)] bg-cover bg-center w-full h-52 md:h-full md:w-[80%] transition duration-300 hover:scale-110`}
          ></div>
          <div className="flex flex-col justify-between md:p-6 px-6 py-10 leading-normal w-full">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Interior & Exterior Detailing
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <button className="border border-[#008dc7] text-[#008dc7] p-2 w-[150px] mt-2 text-[14px] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row justify-between px-5 py-5">
        <div className="overflow-hidden w-full flex-1 flex flex-col items-center bg-white shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <div
            className={`bg-[url(https://car-wrap.es/wp-content/uploads/2023/01/Detailing-car.jpg)] bg-cover bg-center w-full h-52 md:h-full md:w-[80%] transition duration-300 hover:scale-110`}
          ></div>
          <div className="flex flex-col justify-between md:p-6 leading-normal w-full px-6 py-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paint Correction
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <button className="border border-[#008dc7] text-[#008dc7] p-2 w-[150px] mt-2 text-[14px] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        {/* <div className="overflow-hidden w-full flex-1 flex flex-col items-center bg-white shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 ">
          <div
            className={`bg-[url(https://www.autotrainingcentre.com/wp-content/uploads/2018/07/professional-automotive-detailing.jpg)] bg-cover bg-center w-full h-52 md:h-full md:w-[80%] transition duration-300 hover:scale-110`}
          ></div>
          <div className="flex flex-col justify-between md:p-6 px-6 py-10 leading-normal w-full">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Interior & Exterior Detailing
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <button className="border border-[#008dc7] text-[#008dc7] p-2 w-[150px] mt-2 text-[14px] cursor-pointer">
              Learn More
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

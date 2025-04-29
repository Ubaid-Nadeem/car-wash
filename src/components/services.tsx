export default function Services() {
  return (
    <div className="w-full bg-[#181818] md:px-20 py-5">
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
        <h2 className="md:flex-2 text-white text-center md:text-left text-[35px] md:text-[50px] font-bold md:leading-13 leading-10 items-center md:pr-10 px-3 md:px-0">We provide professional auto detailing services</h2>
        <div>

        <button className="md:flex-1 text-white bg-[#008dc7] px-10 py-2 rounded cursor-pointer text-[14px]">
            SEE ALL SERVICES
          </button>
        </div>
      </div>
    </div>
  );
}

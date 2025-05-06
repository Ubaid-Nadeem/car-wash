export default function Pricing() {
  return (
    <div className="bg-[white] py-20 md:px-25 px-5">
      <div className="flex text-[#008dc7] tracking-wider text-[14px] justify-center mb-5">
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
        <span>PRICING PLAN</span>
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
      </div>
      <h2 className="text-center md:text-[45px] font-medium py-2 text-[35px] leading-10 px-5">
        Auto Detailing & Paint Protection
      </h2>
      <p className="text-[gray] text-center font-light px-10 pt-2">
        Nec feugiat nisl pretium fusce id velit. Sed in praesent elementum
        facilisis leo nibh in hac.
      </p>

      <div className="flex md:flex-row flex-col mt-10">
        <div className="py-15 flex-1 border-1 border-gray-300 text-center md:px-15 px-8">
          <h3 className="font-semibold text-[20px] ">Interior Detail</h3>
          <p className="text-[#7d7d79]  p-1 text-[14px]">
            Inside of Vehicle Only
          </p>

          <h2 className="font-bold text-[36px] pt-5 pb-0">$159</h2>
          <span className="text-[14px] p-0 font-light">Starting at*</span>

          <div className="text-[gray] mt-5">
            <p className="py-3 border-b ">Shampoo Carpet/Seats</p>
            <p className="py-3 border-b ">Dash, Doors, & Interior Trim</p>
            <p className="py-3 border-b ">Interior Windows</p>
            <p className="py-3 border-b ">Buttons, Knobs, & Cup Holders</p>
            <p className="py-3">Floor Mats</p>
          </div>
          <button className="text-white bg-[#008dc7] mt-5 py-3 px-10 rounded cursor-pointer tracking-widest text-[12px]">
            GET IT NOW
          </button>
        </div>
        <div className="py-15 flex-1 border-1 border-gray-300 text-center  md:px-15 px-8">
          <h3 className="font-semibold text-[20px]">
            Interior & Exterior Detail
          </h3>
          <p className="text-[#7d7d79] p-1 text-[14px]">
            Inside and Exterior of Vehicle Only
          </p>
          <h2 className="font-bold text-[36px] pt-5">$199</h2>
          <span className="text-[14px] p-0 font-light">Starting at*</span>

          <div className="text-[gray] mt-5">
            <p className="py-3 border-b">Complete Interior Package</p>
            <p className="py-3 border-b">Exterior Dressing of Plastics</p>
            <p className="py-3 border-b">Tires Shine</p>
            <p className="py-3 border-b">Clean All Door Jams</p>
            <p className="py-3">Exterior Hand Wash</p>
          </div>
          <button className="text-white bg-[#008dc7] mt-5 py-3 px-10 rounded cursor-pointer tracking-widest text-[12px]">
            GET IT NOW
          </button>
        </div>
        <div className="py-15 flex-1 border-1 border-gray-300 text-center  md:px-15 px-8">
          <h3 className="font-semibold text-[20px]">Paint Protection</h3>
          <p className="text-[#7d7d79]  p-1 text-[14px]">
            Interior/Exterior and Paint Correction
          </p>
          <h2 className="font-bold text-[36px] pt-5">$399</h2>
          <span className="text-[14px] p-0 font-light">Starting at*</span>

          <div className="text-[gray] mt-5">
            <p className="py-3 border-b">Complete Interior Package</p>
            <p className="py-3 border-b">Complete Extrior Package</p>
            <p className="py-3 border-b">Paint Correction</p>
            {/* <p className="py-3 border-b">Clean All Door Jams</p>
            <p className="py-3">Exterior Hand Wash</p> */}
          </div>
          <button className="text-white bg-[#008dc7] mt-30 py-3 px-10 rounded cursor-pointer tracking-widest text-[12px]">
            GET IT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

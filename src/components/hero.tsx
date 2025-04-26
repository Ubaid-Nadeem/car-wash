import { CarouselPlugin } from "./carousel";

export default function Hero() {
  return (
    <div className="w-full bg-[#181818] flex px-0 lg:px-15 py-10 flex-col md:flex-row">
      <div className="w-full section1 flex-1">
        <span className="text-[#008dc7] text-sm flex tracking-widest">
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

          <span>MOBILE AUTO DETAILING</span>
        </span>
        <div className="md:px-10 px-5">
          <h1 className="text-[45px] leading-12 text-white md:text-[55px]  lg:text-[65px] font-bold lg:leading-17  md:leading-14 pt-5">
            Premier Car Detailing Service From $150
          </h1>
          <p className="text-white font-semibold py-5 text-[14px]">
            Experienced & professional mobile auto detailing services for
            automobiles, SUVS, Trucks, and Recreational Vehicles (RVs)
          </p>

          <button className="text-white bg-[#008dc7] py-3 px-10 rounded cursor-pointer">
            Book Now
          </button>
        </div>
      </div>

      <div className="section2 flex-1 flex justify-center">
        <CarouselPlugin />
      </div>

    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-25 py-10 overflow-hidden">
      <div className="flex-1">
        <div className="text-[#008dc7] text-sm flex tracking-widest">
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

          <span>ABOUT US</span>
        </div>
        <div className="md:px-10 py-5">
          <h2 className="font-semibold text-[30px] md:text-[46px] md:leading-14 leading-9">
            The Leading Car Detailing And Paint Protection Film Company
          </h2>
          <p className="text-[gray] py-5">
            At Otoklin, we believe that every car deserves to be treated with
            care and attention to detail. That’s why we use only the best
            products and equipment to clean, polish, and protect your vehicle’s
            exterior and interior. Our team is highly trained and experienced,
            and we are committed to exceeding your expectations with every
            service we provide.
          </p>
          <button className="text-white bg-[#008dc7] py-3 px-10 rounded cursor-pointer">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="relative flex-1 md:mt-10 py-8 md:p-0 px-2">
        <img
        className="md:w-[500px] w-[320px]"
          src="https://www.familyhandyman.com/wp-content/uploads/2021/06/vacuuming-car-seat-GettyImages-481395168.jpg"
          alt="car"
        />
        <img className="absolute w-[250px] -my-20 mx-18 md:w-[450px] md:mx-30 md:-my-40" src="https://media.istockphoto.com/id/2161011849/photo/mechanic-wearing-black-gloves-polishing-car-paint-with-a-machine-in-a-detailing-studio.jpg?s=612x612&w=0&k=20&c=E6SCqd5DhBUjCNGLGL9ZS4v750_1vB11E_gkrSjrmRI=" alt="" />
      </div>
    </div>
  );
}

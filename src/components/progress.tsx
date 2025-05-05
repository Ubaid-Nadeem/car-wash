import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Progress() {
  return (
    
    <div className="bg-[#181818] w-full md:px-15 px-5 pt-10">
     
      <div className=" section-1 flex md:flex-row flex-col gap-10 progress_bg">
        <div className="flex-1 md:px-20 md:py-10 py-8 px-10">
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

            <span>Working Progress</span>
          </div>
          <h2 className="md:pr-10 text-white font-medium md:text-[45px] text-[30px] leading-9 md:leading-13 py-5">
            Move Towards Working Exclusively On Higher End Vehicles
          </h2>
          <button className="text-white bg-[#008dc7] py-3 px-10 rounded cursor-pointer tracking-widest text-[14px]">
            LEARN MORE
          </button>
        </div>
        <div className="flex-1  text-white text-[20px] md:px-20 md:py-10">
          <Accordion
            type="single"
            collapsible
            className="text-[24px] no-underline px-10 py-5 bg-[black]"
          >
            <AccordionItem value="item-1" className="py-1">
              <AccordionTrigger className="hover:no-underline hover:cursor-pointer hover:text-[#008dc7] text-[18px]">
                Buffing & Polishing
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-1">
              <AccordionTrigger className="hover:no-underline hover:text-[#008dc7] text-[18px]">
                Removing Contaminants
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="py-1">
              <AccordionTrigger className="hover:no-underline hover:text-[#008dc7] text-[18px]">
                Wheels Deep Cleaning
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="py-1">
              <AccordionTrigger className="hover:no-underline hover:text-[#008dc7] text-[18px]">
                Car Interior Cleaning
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="section-2 flex md:flex-row flex-col md:gap-10 text-white md:px-10 py-10">
        <div className="flex-1 border border-[#66727d] flex items-center flex-col py-10">
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              style={{ fill: "#66727d" }}
            >
              <path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path>
            </svg>
          </div>
          <h3 className="text-[35px]">30</h3>
          <p className="font-thin">Corporate Clients</p>
        </div>

        <div className="flex-1 border border-[#66727d] flex items-center flex-col py-10 ">
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              style={{ fill: "#66727d" }}
            >
              <path d="m21.512 6.112-3.89 3.889-3.535-3.536 3.889-3.889a6.501 6.501 0 0 0-8.484 8.486l-6.276 6.275a.999.999 0 0 0 0 1.414l2.122 2.122a.999.999 0 0 0 1.414 0l6.275-6.276a6.501 6.501 0 0 0 7.071-1.414 6.504 6.504 0 0 0 1.414-7.071z"></path>
            </svg>
          </div>
          <h3 className="text-[35px]">110</h3>
          <p className="font-thin">Expert Technician</p>
        </div>
        
        <div className="flex-1 border border-[#66727d] flex items-center flex-col py-10">
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              style={{ fill: "#66727d"}}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <circle cx="8.5" cy="10.5" r="1.5"></circle>
              <circle cx="15.493" cy="10.493" r="1.493"></circle>
              <path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path>
            </svg>
          </div>
          <h3 className="text-[35px]">1,530</h3>
          <p className="font-thin">Happy Customes</p>
        </div>
      </div>
  
    </div>
  );
}

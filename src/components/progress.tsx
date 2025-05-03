import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Progress() {
  return (
    <div className="bg-[#181818] w-full md:px-15 px-5 absolute">
      <div className=" section-1 flex md:flex-row flex-col gap-10 progress_bg relative -mt-10">
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
    </div>
  );
}

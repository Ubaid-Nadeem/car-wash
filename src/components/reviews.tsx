import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Reviews() {
  return (
    <div className="w-full md:px-25 py-10 px-5">
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

        <span>OUR REVIEWS</span>
      </div>
      <h2 className="md:text-[45px] text-[35px] font-medium md:pb-20 pb-15 md:text-left text-center leading-10 pt-2 px-5 md:px-0">
        What Our Client Say About Us
      </h2>
      <Carousel>
        <CarouselContent className="gap-2">
          <CarouselItem className="md:basis-1/2 lg:basis-1/2 px-5 py-5 bg-gray-100 cursor-grab">
            <div>
              <div className="flex pl-5">
                <Avatar className="w-15 h-auto">
                  <AvatarImage src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/454426391_896539805846853_3468358128276627992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bNmIdQxdnksQ7kNvwGvPAFH&_nc_oc=AdkCevPkIhz4pz_y_oRVV3FKOEPRbM9zHKPGW2huXawlrd4nuqOzoDnlp1clGQmViO0&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=QOHguqBe_5OFfq7vnvO98A&oh=00_AfKx_h1szGNQ-q8gWtP_WpvJ7oNe6KhpnsI2lFcAj7tGSw&oe=681FC8BC" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex gap-1 pl-2 flex-col">
                  <div className="flex items-center md:gap-2 gap-1">
                    <span className="font-medium text-[14px] md:text-[16px]">
                      Isela Peralez{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "rgba(255, 97, 119, 1)" }}
                    >
                      <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"></path>
                    </svg>
                    <span className="text-gray-600 text-[12px] md:text-[14px]">
                      Recommends
                    </span>
                    <span className="font-medium hidden md:inline">
                      Bright Star Auto Detailing.
                    </span>
                  </div>
                  <div className="text-gray-500 text-[13px] md:text-[14px] flex items-center gap-1">
                    <span>August 28, 2024</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      style={{ fill: "rgb(163, 163, 163)" }}
                      className="inline"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pl-5">
                <p className="text-[18px] py-5 italic">
                  First time I used Bright Star Auto Detailing was a great
                  experience! Thank you so much for making my vehicle look like
                  I just took it off the lot. You guys are AMAZING!!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2 px-5 py-5 bg-gray-100 cursor-grab">
            <div>
              <div className="flex pl-5">
                <Avatar className="w-15 h-auto">
                  <AvatarImage src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/454426391_896539805846853_3468358128276627992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bNmIdQxdnksQ7kNvwGvPAFH&_nc_oc=AdkCevPkIhz4pz_y_oRVV3FKOEPRbM9zHKPGW2huXawlrd4nuqOzoDnlp1clGQmViO0&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=QOHguqBe_5OFfq7vnvO98A&oh=00_AfKx_h1szGNQ-q8gWtP_WpvJ7oNe6KhpnsI2lFcAj7tGSw&oe=681FC8BC" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex gap-1 pl-2 flex-col">
                  <div className="flex items-center md:gap-2 gap-1">
                    <span className="font-medium text-[14px] md:text-[16px]">
                      Isela Peralez{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: "rgba(255, 97, 119, 1)" }}
                    >
                      <path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"></path>
                    </svg>
                    <span className="text-gray-600 text-[12px] md:text-[14px]">
                      Recommends
                    </span>
                    <span className="font-medium hidden md:inline">
                      Bright Star Auto Detailing.
                    </span>
                  </div>
                  <div className="text-gray-500 text-[13px] md:text-[14px] flex items-center gap-1">
                    <span>August 28, 2024</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      style={{ fill: "rgb(163, 163, 163)" }}
                      className="inline"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pl-5">
                <p className="text-[18px] py-5 italic">
                  First time I used Bright Star Auto Detailing was a great
                  experience! Thank you so much for making my vehicle look like
                  I just took it off the lot. You guys are AMAZING!!
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

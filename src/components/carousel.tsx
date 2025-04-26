"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  let items = [
    "https://149881442.v2.pressablecdn.com/wp-content/uploads/2023/06/auto-detailing-car-interior-eps-2048x1367-1.jpeg",
    "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg?semt=ais_hybrid&w=740",
    "https://dd3t7ekmk8i2x.cloudfront.net/wp-content/uploads/2023/12/28210820/DetialingBlogPost.jpg",
  ];

  return (
    <div className="realtive mt-10 md:mt-0">
      <Carousel
        plugins={[plugin.current]}
        className="overflow-hidden items-center flex z-10 aspect-video carousel_box_shadow ml-5"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((image, index) => (
            <CarouselItem key={index}>
              <div>
                <Card className="p-0 m-0 border-none">
                  <CardContent className=" p-0">
                    <img src={`${image}`} alt="car" className="w-full" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className="bg-[#555555] w-[90%] h-[250px]  md:h-[300px] relative -mt-[250px]  md:-mt-[250px] -ml-[20px]"></div> */}
    </div>
  );
}

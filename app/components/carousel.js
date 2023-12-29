"use client";
import * as React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[1480px] mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="mr-3">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <span className=" w-full">
                    <Image
                      width="500"
                      height="500"
                      src="/video.webp"
                      alt="carousel-img"
                      className=" w-full"
                    />
                  </span>
                  <span className="flex flex-col items-center justify-center py-[30px] px-[25px]">
                    <p className=" text-center text-sm lg:text-base leading-[28px] mb-5 text-[#666666]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem doloremque suscipit enim dolor debitis illo
                      aperiam expedita nemo aliquid nam?
                    </p>
                    <div className=" flex my-[10px]">
                      <IoIosStar className=" text-[#FFAD00]" />
                      <IoIosStar className=" text-[#FFAD00]" />
                      <IoIosStar className=" text-[#FFAD00]" />
                      <IoIosStar className=" text-[#FFAD00]" />
                      <IoIosStar className=" text-[#FFAD00]" />
                    </div>
                    <h1 className=" mb-[5px] text-[#3f3f3f] text-base lg:text-lg">
                      Mohamad Mirza
                    </h1>
                    <h2 className=" text-[#666666] text-xs lg:text-base">
                      Director, LOCALMASTERCHEFS LTD
                    </h2>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className=" lg:flex hidden" />
    </Carousel>
  );
}

import React from "react";
import Image from "next/image";
import Arrow from "../../../../public/images/arrow.png";
import HeroImg from "../../../../public/images/Hero.png";
import { Button } from "@/common/components/ui/button";
import { AiFillStar } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="w-5/6 mx-auto mt-10">
      <div className="w-12/12 flex justify-between items-center gap-x-4 flex-col md:flex-row">
        <div className="md:w-6/12">
          <div className="flex items-center gap-x-3 relative">
            <h1 className="text-7xl md:text-9xl font-semibold tracking-wide text-primary">
              Fast
            </h1>
            <div className="relative">
              <h1 className="text-5xl font-semibold">Food</h1>
              <h1 className="text-2xl md:text-5xl font-semibold">Delivery</h1>
              <Image
                src={Arrow}
                alt="arrow"
                className="hidden md:block absolute left-28 -top-28 w-40"
              />
            </div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium
          </p>
          <div className="pt-10 flex md:gap-x-8 flex-col md:flex-row gap-y-3">
            <Button className="rounded-full">Order Now</Button>
            <Button className="rounded-full bg-slate-950 text-white">
              Learn More
            </Button>
          </div>
          <div className="flex gap-x-1 pt-10">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-primary text-lg" />
            ))}
          </div>
          <h2 className="font-bold pt-4">5 Star Rating</h2>
          <p className="text-gray-400 font-light">based on 1788 reviews</p>
        </div>
        <div className=" hidden md:block w-6/12">
          <Image src={HeroImg} alt="hero" className="bg-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Promo from "@images/images/banner-asian.png";
import Ellipse from "@images/images/ellipse.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <article className=" bg-primary mt-5 rounded-lg p-5 flex relative overflow-hidden">
        <div className="flex flex-col gap-y-4">
          {" "}
          <h1 className="text-white text-2xl font-bold font-['Poppins']">
            Get Discount Voucher
            <br />
            Up To 20%{" "}
          </h1>
          <p className="text-white text-sm font-normal font-['Poppins'] leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            neque.
          </p>
        </div>
        <div className="w-48 absolute bottom-0 right-0 z-10">
          <Image src={Promo} alt="Banner" />
        </div>
        <div className="absolute top-0 right-0 z-0">
          <Image src={Ellipse} alt="Ellipse" />
        </div>
        <div className="absolute top-0 left-0 z-0 -rotate-90">
          <Image src={Ellipse} alt="Ellipse" />
        </div>
      </article>
    </section>
  );
};

export default Banner;

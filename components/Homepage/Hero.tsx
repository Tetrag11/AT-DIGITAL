import React from "react";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="relative w-full ">
      <div className="relative w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-contain lg:object-cover object-top max-h-[700px]"
          src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712902590/andy-kelly-0E_vhMVqL9g-unsplash_2-min_npv4nf.png"
          alt="hero image"
        />
      </div>
      <div className="absolute w-full bottom-10  hidden lg:block py-5 px-5 xl:px-0 max-width-container left-[50%] translate-x-[-50%]">
        <div className="  max-w-[622px]  gradient">
          <div className="py-5 px-5  w-full">
            <p className="max-w-[314px] md:max-w-[675px] text-4xl md:text-5xl font-bold tracking-[-2%] text-white pb-5">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </p>
            <Button>get free consultation</Button>
          </div>
        </div>
      </div>
      <div className="w-full gradient lg:hidden ">
        <div className="py-5 px-5 xl:px-0 w-full">
          <p className="max-w-[314px] md:max-w-[675px] text-4xl md:text-5xl font-bold tracking-[-2%] text-white pb-5">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </p>
          <Button>get free consultation</Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Button from "../Button";

export default function Section2() {
  return (
    <div className=" md:pb-20 pb-14 px-5 xl:px-0 w-full flex flex-col md:flex-row gap-5 justify-center items-center">
      <img
        className="w-[275px] h-[275px] lg:w-[346px] lg:h-[346px] md:order-2"
        src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712905914/image_1_b2vibv.png"
        alt="magnifying glass"
      />

      <article className="w-full flex flex-col md:items-start items-center gap-5 max-w-[355px] md:max-w-[400px] lg:max-w-[530px] md:order-1">
        <h1 className="text-[27px] text-center md:text-left font-semibold">
          Digital Strategy Consulting
        </h1>
        <p className="text-base text-center md:text-left">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <Button>Learn More</Button>
      </article>
    </div>
  );
}

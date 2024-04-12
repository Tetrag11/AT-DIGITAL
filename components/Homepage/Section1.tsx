import React from "react";
import Button from "../Button";

export default function Section1() {
  return (
    <div className="pt-20 lg:pt-40 md:pb-20 pb-14 px-5 xl:px-0 w-full flex flex-col md:flex-row gap-5 justify-center items-center">
      <img
        className="w-[275px] h-[275px] lg:w-[346px] lg:h-[346px]"
        src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712905915/image_2_qlmzmg.png"
        alt="desktop"
      />

      <article className="w-full flex flex-col md:items-start items-center gap-5 max-w-[355px] md:max-w-[400px] lg:max-w-[530px]">
        <h1 className="text-[27px] text-center md:text-left font-semibold">
          Web & Mobile App Development
        </h1>
        <p className="text-base text-center md:text-left">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <Button>Learn More</Button>
      </article>
    </div>
  );
}

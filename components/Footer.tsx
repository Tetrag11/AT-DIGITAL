import React from "react";

export default function Footer() {
  return (
    <footer className="w-full lg:mt-20 md:mt-[68px] mt-[60px]">
      <div className="py-5 px-5 xl:px-0 max-width-container">
        <div className="flex flex-col gap-5 pb-14 max-w-[413px] lg:hidden">
          <img
            className="w-full z-0 max-w-[240px] "
            src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712895175/Logo_vldlpk.png"
            alt="logo"
          />
          <p className="text-white lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex md:gap-40 md:flex-row flex-col">
          <div className=" flex-col gap-5 pb-14 max-w-[413px] hidden lg:flex">
            <img
              className="w-full z-0 max-w-[240px] "
              src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712895175/Logo_vldlpk.png"
              alt="logo"
            />
            <p className="text-white lato">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <article className="pb-14">
            <h5 className="text-[21px] font-semibold text-white pb-2 lg:pt-3 tracking-normal">
              Our Technologies
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[14px] text-white font-medium">ReactJS</li>
              <li className="text-[14px] text-white font-medium">Gatsby</li>
              <li className="text-[14px] text-white font-medium">NextJS</li>
              <li className="text-[14px] text-white font-medium">NodeJS</li>
            </ul>
          </article>
          <article className="pb-14">
            <h5 className="text-[21px] font-semibold text-white pb-2 lg:pt-3 tracking-normal">
              Our Services
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="text-[14px] text-white font-medium">
                Social media Marketing
              </li>
              <li className="text-[14px] text-white font-medium">
                Web & Mobile App Development
              </li>
              <li className="text-[14px] text-white font-medium">
                Data & Analytics
              </li>
            </ul>
          </article>
        </div>
        <div className="w-full  border-y border-white mb-3"></div>
        <div className="flex gap-2 justify-center">
          <a href="#" className="text-white text-[14px] font-medium">
            Privacy Policy
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-white text-[14px] font-medium">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

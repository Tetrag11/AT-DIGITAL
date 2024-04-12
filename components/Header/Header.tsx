"use client";
import React, { useState } from "react";
import Mobilenav from "./Mobilenav";

export default function Header() {
  return (
    <nav>
      <div className="py-5 px-5 xl:px-0 max-width-container grid grid-cols-[3fr_1fr] gap-3 justify-between items-center relative">
        <img
          className="w-full z-0 max-w-[240px] "
          src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712895175/Logo_vldlpk.png"
          alt="logo"
        />
        <Mobilenav />
        <menu className="gap-7 pt-2 hidden md:flex">
          <li className="">
            <a
              className="uppercase text-white text-[14px] font-medium whitespace-nowrap"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="">
            <a
              className="uppercase text-white text-[14px] font-medium whitespace-nowrap "
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="">
            <a
              className="uppercase text-white text-[14px] font-medium whitespace-nowrap"
              href="#"
            >
              Contact Us
            </a>
          </li>
          <li className="">
            <a
              className="uppercase text-white text-[14px] font-medium whitespace-nowrap"
              href="#"
            >
              Careers
            </a>
          </li>
        </menu>
      </div>
    </nav>
  );
}

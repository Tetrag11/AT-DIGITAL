"use client";
import React, { useState } from "react";
import { animated, useTransition, useTrail, a } from "@react-spring/web";
import Hamburger from "hamburger-react";

const Trail: any = ({ open, children }: any) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

export default function Mobilenav() {
  const [isOpen, setOpen] = useState(false);
  const transition = useTransition(isOpen, {
    from: {
      y: "-100%",
    },
    enter: {
      y: "0",
    },
    leave: {
      y: "-100%",
    },
    config: { mass: 5, tension: 2000, friction: 300 },
  });
  return (
    <>
      {transition((style, isOpen) => (
        <>
          {isOpen ? (
            <animated.div
              style={style}
              className="absolute w-full h-[100dvh] bg-white top-0 left-0 overflow-x-hidden z-20"
            >
              <menu className="p-5 flex flex-col ">
                <Trail open={isOpen}>
                  <li className="pb-10 pt-5">
                    <a className="uppercase text-[14px] font-medium" href="#">
                      Home
                    </a>
                  </li>
                  <li className="pb-10">
                    <a className="uppercase text-[14px] font-medium" href="#">
                      Services
                    </a>
                  </li>
                  <li className="pb-10">
                    <a className="uppercase text-[14px] font-medium" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="pb-10">
                    <a className="uppercase text-[14px] font-medium" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="pb-10">
                    <a className="uppercase text-[14px] font-medium" href="#">
                      Careers
                    </a>
                  </li>
                </Trail>
              </menu>
            </animated.div>
          ) : null}
        </>
      ))}
      <div className="justify-self-end relative z-30 overflow-hidden md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "black" : "white"}
          size={31}
        />
      </div>
    </>
  );
}

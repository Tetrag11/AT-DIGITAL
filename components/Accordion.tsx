"use client";
import React, { useRef } from "react";

export default function Accordion({ question, answer }: any) {
  const ref = useRef(null) as any;
  const imageRef = useRef(null) as any;

  function handleClick() {
    if (ref.current !== null && ref.current.style.display === "block") {
      ref.current.style.display = "none";
      if (imageRef.current !== null) {
        imageRef.current.src =
          "https://res.cloudinary.com/dzjoao5pe/image/upload/v1712908901/Group_35621_xxdgkw.png";
      }
    } else {
      ref.current.style.display = "block";
      if (imageRef.current !== null) {
        imageRef.current.src =
          "https://res.cloudinary.com/dzjoao5pe/image/upload/v1712908800/Group_35602_ayc2ru.png";
      }
    }
  }

  return (
    <>
      <div className="w-full">
        <button
          onClick={() => handleClick()}
          className="accordion flex justify-between p-6 items-center rounded"
        >
          <h6 className="text-[22px] font-medium leading-7 max-w-[650px]">
            {question}
          </h6>
          <img
            className="w-[14px]"
            ref={imageRef}
            src="https://res.cloudinary.com/dzjoao5pe/image/upload/v1712908901/Group_35621_xxdgkw.png"
            alt="plus icon"
          />
        </button>
        <div className="panel rounded" ref={ref}>
          <p className="pb-6 text-[18px] leading-[30px] text-light ">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
}

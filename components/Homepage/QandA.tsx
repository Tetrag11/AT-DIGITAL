import React from "react";
import Accordion from "../Accordion";

export default function QandA() {
  return (
    <div className="w-full py-5 px-5 xl:px-0 max-width-container ">
      <div className="max-w-[850px] flex flex-col gap-5 items-center w-full mx-auto">
        <h1 className="text-[27px] text-center md:text-left font-semibold">
          Frequently asked questions
        </h1>
        <Accordion
          question={
            "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          }
          answer={
            "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          }
        />
        <Accordion
          question={
            "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
          }
          answer={
            "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          }
        />
        <Accordion
          question={
            "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
          }
          answer={
            "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          }
        />
      </div>
    </div>
  );
}

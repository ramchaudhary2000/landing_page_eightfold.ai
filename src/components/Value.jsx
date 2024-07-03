import React from "react";
// text-transparent bg-clip-text bg-gradient-to-r from-buuton-color-1  via-button-color-2 to-button-color-3

const Value = () => {
  return (
    <div className="flex flex-col  items-center px-5">
        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-buuton-color-1  via-button-color-2 to-button-color-3 max-md:text-4xl">Our Values</div>
        <div className="flex flex-col gap-2 ">
            <div className="text-3xl font-bold leading-10 text-center text-neutral-800 max-md:mt-10">What we believe in</div>
            <div className="text-2xl leading-10 text-center text-mid-black max-md:max-w-full">Our interactions with customers, colleagues and partners are guided by our values.</div>
        </div>
    </div>
  );
};

export default Value;

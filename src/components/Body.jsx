import React from "react";

const Body = () => {
  return (
    <div>
      <div class="bg-[url('./src/assets/bg-image.png')] bg-cover w-full h-[404px] absolute -z-50 "></div>
      <div className="flex-col flex px-5 py-16 justify-items-center items-left text-left text-white gap-5">
        <div className="text-[34px] font-bold leading-10 ">The right career for everyone in the world</div>
        <div className="text-[24px] leading-7 ">
          We believe employment is the backbone of our society, and everyone
          deserves the right job
        </div>
        <button className="text-[26px] px-8 py-4 font-semibold rounded-md bg-gradient-to-r from-buuton-color-1  via-button-color-2 to-button-color-3 max-w-fit">
          Explore careers
        </button>
      </div>
    </div>
  );
};

export default Body;

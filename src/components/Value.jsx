import React from "react";

const Value = () => {
  return (
    <div className="px-2 py-4 ">
      <div className="text-center text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-buuton-color-1  via-button-color-2 to-button-color-3"> Our Values</div>
      <div className="flex-col flex text-center gap-1 ">
        <div className="text-[30px] font-bold ">What we believe in</div>
        <div className="text-mid-black text-[20px] leading-5 ">Our interactions with customers, colleagues and partners are guided by our values.</div>
      </div>
    </div>
  );
};

export default Value;

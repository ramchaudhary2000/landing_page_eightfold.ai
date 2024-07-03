import React from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <img className="max-w-44 h- 10 items-end" src="./src/assets/logo.svg"alt="logo"/>
      <TiThMenu className="w-8 h-8"/>
    </div>
  );
};

export default Navbar;

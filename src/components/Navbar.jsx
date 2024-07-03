import React from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-4 justify-between">
      <img className="max-w-44 h-10" src="./src/assets/logo.svg"alt="logo"/>
      <TiThMenu className="w-8 h-8 lg:hidden" />
      <ul className="flex gap-8">
        <li><a href="">Home</a></li>
        <li><a href="">Why us</a></li>
        <li><a href="">Carrers</a></li>
        <div className="flex gap-3">
          <li><a href="">Location </a></li>
          <img src="./src/assets/location.svg" alt="location_logo" />
        </div>
      </ul>
      <div className="flex gap-5">
        <img src="./src/assets/twitter_logo.svg" alt="twitter" />
        <img src="./src/assets/facebook.svg" alt="facebook" />
        <img src="./src/assets/instagram.svg" alt="instagram" />
      </div>
      <div>
        <label for="Language">Language</label>
        <select name="cars" id="cars">
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="german">German</option>
        </select>

      </div>
    </div>
  );
};

export default Navbar;

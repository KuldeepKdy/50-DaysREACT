import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureLow,
  FaTemperatureHigh,
  FaWind,
  FaSun,
} from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { TbSunset2 } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

const TemperatureAndDetails = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or Whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between  text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20 "
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureHalf size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={25} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FaSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <TbSunset2 />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:45 PM</span>
        </p>
        <p className="font-light">|</p>
        <FaTemperatureHigh />
        <p className="font-light">
          High: <span className="font-medium ml-1">44°</span>
        </p>
        <p className="font-light">|</p>
        <FaTemperatureLow />
        <p className="font-light">
          Low: <span className="font-medium ml-1">24°</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;

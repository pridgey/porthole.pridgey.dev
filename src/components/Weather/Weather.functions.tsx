import React from "react";
import { FaSun, FaSnowflake, FaCloudRain, FaMoon } from "react-icons/fa";
import { MdWbCloudy } from "react-icons/md";
import { WiFog } from "react-icons/wi";
import { IoIosRainy, IoIosThunderstorm } from "react-icons/io";

export const getWeatherIcon = (code: number) => {
  if (code) {
    if (code === 800) {
      return <FaSun />;
    }
    if (code?.toString()?.startsWith("8")) {
      return <MdWbCloudy />;
    }
    if (code?.toString()?.startsWith("7")) {
      return <WiFog />;
    }
    if (code?.toString()?.startsWith("6")) {
      return <FaSnowflake />;
    }
    if (code?.toString()?.startsWith("5")) {
      return <IoIosRainy />;
    }
    if (code?.toString()?.startsWith("3")) {
      return <FaCloudRain />;
    }
    if (code?.toString()?.startsWith("2")) {
      return <IoIosThunderstorm />;
    }
    return <FaMoon />;
  }
  return <FaMoon />;
};

import React from "react";
import { FaSun, FaSnowflake, FaCloudRain, FaMoon } from "react-icons/fa";
import { MdWbCloudy } from "react-icons/md";
import { WiFog } from "react-icons/wi";
import { IoIosRainy, IoIosThunderstorm } from "react-icons/io";

export const getWeatherIcon = (code: string) => {
  if (code && typeof code === "string") {
    if (code === "800") {
      return <FaSun />;
    }
    if (code?.startsWith("8")) {
      return <MdWbCloudy />;
    }
    if (code?.startsWith("7")) {
      return <WiFog />;
    }
    if (code?.startsWith("6")) {
      return <FaSnowflake />;
    }
    if (code?.startsWith("5")) {
      return <IoIosRainy />;
    }
    if (code?.startsWith("3")) {
      return <FaCloudRain />;
    }
    if (code?.startsWith("2")) {
      return <IoIosThunderstorm />;
    }
    return <FaMoon />;
  }
  return <FaMoon />;
};

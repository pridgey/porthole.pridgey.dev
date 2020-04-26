import React from "react";
import { FiCalendar } from "react-icons/fi";
import { FaBirthdayCake, FaHeart } from "react-icons/fa";
import { GiBasketballJersey, GiDiamondRing, GiBat } from "react-icons/gi";

export const doesEventOccurToday = (startDate?: string) => {
  if (startDate) {
    const today = new Date();
    const eventDate = new Date(startDate);

    return (
      eventDate.getUTCFullYear() === today.getUTCFullYear() &&
      eventDate.getUTCMonth() === today.getUTCMonth() &&
      eventDate.getUTCDate() === today.getUTCDate()
    );
  }
};

export const doesEventOccurMoreThanOneYear = (startDate?: string) => {
  if (startDate) {
    const today = new Date();
    const eventDate = new Date(startDate);

    let monthsAhead = (eventDate.getUTCFullYear() - today.getUTCFullYear()) * 12;
    monthsAhead -= today.getUTCMonth() + 1;
    monthsAhead += eventDate.getUTCMonth() + 1;

    return monthsAhead > 12;
  }
};

export const getHumanReadableDate = (startDate?: string) => {
  if (startDate) {
    const today = new Date();
    const eventDate = new Date(startDate);

    let monthsAhead = (eventDate.getUTCFullYear() - today.getUTCFullYear()) * 12;
    monthsAhead -= today.getUTCMonth() + 1;
    monthsAhead += eventDate.getUTCMonth() + 1;

    if (monthsAhead > 0) {
      return `in ${monthsAhead} month${monthsAhead > 1 ? "s" : ""}`;
    } else {
      const daysAhead = eventDate.getUTCDate() - today.getUTCDate();
      if (daysAhead > 7) {
        const weeksAhead = Math.floor(daysAhead / 7);
        return `in ${weeksAhead} week${weeksAhead > 1 ? "s" : ""}`;
      } else {
        if (daysAhead === 0) {
          return "";
        } else {
          return `in ${daysAhead} day${daysAhead > 1 ? "s" : ""}`;
        }
      }
    }
  } else {
    return "";
  }
};

export const getIcon = (summary: string) => {
  if (contains(summary, "bat")) {
    return <GiBat />;
  }

  if (contains(summary, "birthday")) {
    return <FaBirthdayCake />;
  }

  if (contains(summary, "vs")) {
    return <GiBasketballJersey />;
  }

  if (contains(summary, "wedding")) {
    return <GiDiamondRing />;
  }

  if (contains(summary, "anniversary")) {
    return <FaHeart />;
  }

  return <FiCalendar />;
};

const contains = (largerText: string, containsText: string) => {
  return largerText.toLowerCase().indexOf(containsText.toLowerCase()) > -1;
};

import React, { useState, useEffect } from "react";
import { BottomHeader, TopHeader, Wrapper } from "./DateHeader.styles";
import {
  humanDateHeader,
  getGreeting,
  getDayOfWeek,
} from "./DateHeader.functions";

export const DateHeader = () => {
  const [dayOfWeek, setDayOfWeek] = useState("Sunday");
  const [humanDate, setHumanDate] = useState("");
  const [greeting, setGreeting] = useState("What it do!");

  useEffect(() => {
    const getDateInfo = () => {
      const today = new Date();
      setDayOfWeek(getDayOfWeek(today));
      setHumanDate(humanDateHeader(today));
      setGreeting(getGreeting(today) || "What it do!");
    };

    setInterval(getDateInfo, 3600000);

    getDateInfo();
  }, []);

  return (
    <Wrapper>
      <TopHeader>{dayOfWeek}</TopHeader>
      <TopHeader>{humanDate}</TopHeader>
      <BottomHeader>{greeting}</BottomHeader>
    </Wrapper>
  );
};

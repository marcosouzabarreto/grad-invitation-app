"use client";
import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import { differenceInSeconds, differenceInHours, differenceInMinutes, differenceInDays } from "date-fns";
import TimeDisplay from "./TimeDisplay";

type Countdown = {
  days: number | null,
  hours: number | null,
  minutes: number | null,
  seconds: number | null,
}

function calculateTimeLeft() {
  const hourOffset = 3;
  const utcHour = 20 + hourOffset;

  const graduationDate = new Date(Date.UTC(2024, 2, 23, utcHour, 0, 0));
  const now = new Date();


  return {
    days: differenceInDays(graduationDate, now),
    hours: differenceInHours(graduationDate, now) % 24,
    minutes: differenceInMinutes(graduationDate, now) % 60,
    seconds: differenceInSeconds(graduationDate, now) % 60,
  };
};

function formatNum(num: number | null) {
  if (num === null) {
    return '  '
  }
  if (num < 10) {
    return `0${num}`
  }
  return `${num}`
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<Countdown>({ days: null, hours: null, minutes: null, seconds: null });
  const { days, hours, minutes, seconds } = timeLeft;

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} className={"lg:gap-12 md:gap-9 gap-3 lg:mt-36 md:mt-28 mt-16 sm:flex-row flex-col"}>
      <TimeDisplay time={formatNum(days)} unit="DIAS" />
      <TimeDisplay time={formatNum(hours)} unit="HORAS" />
      <TimeDisplay time={formatNum(minutes)} unit="MINUTOS" />
      <TimeDisplay time={formatNum(seconds)} unit="SEGUNDOS" />
    </Box>
  )
}

"use client";
import React, { useEffect, useState } from "react";
interface Props {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}
const Clock = () => {
  const [time, setTime] = useState<Props>();
  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const currentSecond = currentDate.getSeconds();
      setTime({
        year: currentYear,
        month: currentMonth,
        day: currentDay,
        hour: currentHour,
        minute: currentMinute,
        second: currentSecond,
      });
    };
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="mb-3 bg-red-roseBud rounded-xl">
      {time ? (
        <h2 className="text-[75px] font-semibold mx-10 ">
          {time?.hour}:{time?.minute}:
          <span className="translate-y-6">{time?.second}</span>
        </h2>
      ) : (
        <h2 className="text-[75px] font-semibold mx-10">
          00:
          <span className="translate-y-6">00</span>
        </h2>
      )}
      <div className="flex text-[20px] font-bold  mx-10">
        {time ? (
          <h3>
            Ngày {time?.month} tháng {time?.day} năm {time?.year}
          </h3>
        ) : (
          <h3>Ngày 00 tháng 00 năm 0000</h3>
        )}
      </div>
    </div>
  );
};
export default Clock;

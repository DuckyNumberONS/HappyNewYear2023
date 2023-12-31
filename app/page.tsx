"use client";
import HappyNewYear from "@/lib/components/happy-new-year";
import MainScreen from "@/lib/components/main-screen";
import { PopupContext } from "@/lib/hook/Context/popup";
// import Image from "next/image";
import { Howl, Howler } from "howler";
import { useContext, useEffect, useState } from "react";

interface PropsTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const Home = () => {
  // const audio = new Audio("/music/effect/game-start-6104.mp3");
  const audio = new Howl({
    src: ["/music/effect/game-start-6104.mp3"],
  });
  const [time, setTime] = useState<PropsTime>();

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
  const { setPopup } = useContext(PopupContext);

  const handleOpenCv = () => {
    audio.play();
    if (time?.year == 2024) {
      setPopup(true);
    }
  };

  return (
    <>
      <>
        {/* <MainScreen /> */}
        <div className="relative mt-10">
          <button
            onClick={handleOpenCv}
            className="bg-[#ff5851] mb-4 w-full p-5 rounded-xl bottom-0 font-sans font-bold text-white hover:bg-[#6ce0e0] hover:text-[#ffee94] text-xl delay-100"
          >
            <h1>
              Chiếc nút này chỉ hoạt động khi 00:00 ngày 1 tháng 1 năm 2024
            </h1>
          </button>
        </div>
      </>
    </>
  );
};
export default Home;

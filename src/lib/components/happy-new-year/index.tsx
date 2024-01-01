import React, { useEffect, useState } from "react";
import "../happy-new-year/style.scss";
import { Howl, Howler } from "howler";
import Dog from "../dog";

const HappyNewYear = () => {
  const audio = new Howl({
    src: ["/music/HPNY.mp3"],
  });
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    audio.play();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="box-happy-newyear">
      <div className="absolute top-[400px] right-0 left-0">
        <div className="w-full">
          <h1 className="text-center text-lg">
            Happy New Year 2024 Nguyet Anh Xink Dep 🎉🎉🎉 <br />
          </h1>
          <p className="text-center text-sm transition delay-1000 duration-300 ease-in-out mt-5">
            Anh chúc chúc em có năm mới thật vui vẻ và có nhiều sức khỏe để đấm
            nhau với deadline nha !!!!
          </p>
          {popup && (
            <div className="mt-[80px] flex justify-center items-center gap-10">
              <p className="transition delay-1000 duration-700 ease-in-out text-center ">
                Am sâu sorry vì sự ngu ngơ, dần độn của anh trong thời gian
                quaaaaa !!!!
              </p>
              <Dog />
            </div>
          )}
        </div>
      </div>

      <div className="fireworks">
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
      </div>
      <div className="fireworks">
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
      </div>
      <div className="fireworks">
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
        <div className="year"></div>
      </div>
      <div className="city"></div>
    </div>
  );
};

export default HappyNewYear;

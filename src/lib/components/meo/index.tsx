import React from "react";
import "../meo/style.css";
const Meo = () => {
  return (
    <div className="relative">
      <div className="the-container">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle"></label>

        <div className="day-night-cont">
          <span className="the-sun"></span>
          <div className="the-moon">
            <span className="moon-inside"></span>
          </div>
        </div>

        <div className="switch">
          <div className="button">
            <div className="b-inside"></div>
          </div>
        </div>

        <div className="c-window">
          <span className="the-sun"></span>
          <span className="the-moon"></span>

          <div className="the-cat">
            <div className="cat-face">
              <section className="eyes left">
                <span className="pupil"></span>
              </section>
              <section className="eyes right">
                <span className="pupil"></span>
              </section>

              <span className="nose"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Meo;

import React from "react";

import { useState, useEffect } from "react";
export const FlashSale = ({onClick}) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return { hours, minutes, seconds };
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  return (
    <section>
      <div className="flash-sale">
        <div className="top">
          <div className="top-left" style={{ marginTop: "20px" }}>
            <span className="plot">
              <img src="image/flash.svg" alt="" className="flash" />
              <p>Flash sale</p>
            </span>
            <span style={{display:"flex", alignItems:"center", gap:'10px'}}>
              <div className="round">
                {" "}
                {time.hours.toString().padStart(2, "0")}
              </div>
              <span style={{ fontWeight: "600", color: "white" }}>:</span>
              <div className="round">
                {" "}
                {time.minutes.toString().padStart(2, "0")}
              </div>
              <span style={{ fontWeight: "600", color: "white" }}>:</span>
              <div className="round">
                {" "}
                {time.seconds.toString().padStart(2, "0")}
              </div>
            </span>
          </div>
          <div className="top-right" style={{ marginTop: "20px" }}>
            <button className="left-btn">&larr;</button>
            <button className="right-btn">&rarr;</button>
          </div>
        </div>
        <div className="flash-slide" onClick={onClick}>
          <div className="flash-card">
            <img src="image/favorite.svg" alt="" className="fav-icon" />
            <img src="image/woman-sitting.svg" alt="" />
            <div className="card-details">
              <p className="desc">Sweet and Comfy Cotton Sweater</p>
              <span className="price">
                {" "}
                <p>$400.40</p> <p className="slashed">$400.40</p>
              </span>
              <hr />
              <span className="range">
                {" "}
                <input
                  type="range"
                  min="0"
                  max="10"
                  className="custom-range"
                />{" "}
                9/10 sales
              </span>
            </div>
          </div>
          <div className="flash-card">
            <img src="image/favorite.svg" alt="" className="fav-icon" />
            <img src="image/hat.svg" alt="" />
            <div className="card-details">
              <p className="desc">Sweet and Comfy Cotton Sweater</p>
              <span className="price">
                {" "}
                <p>$235.40</p> <p className="slashed">$400.40</p>
              </span>
              <hr />
              <span className="range">
                {" "}
                <input
                  type="range"
                  min="0"
                  max="10"
                  className="custom-range"
                />{" "}
                9/10 sales
              </span>
            </div>
          </div>
          <div className="flash-card">
            <img src="image/favorite.svg" alt="" className="fav-icon" />
            <img src="image/bag.svg" alt="" />
            <div className="card-details">
              <p className="desc">Sweet and Comfy Cotton Sweater</p>
              <span className="price">
                {" "}
                <p>$345.95</p> <p className="slashed">$400.40</p>
              </span>
              <hr />
              <span className="range">
                {" "}
                <input
                  type="range"
                  min="0"
                  max="10"
                  className="custom-range"
                />{" "}
                9/10 sales
              </span>
            </div>
          </div>
          <div className="flash-card">
            <img src="image/favorite.svg" alt="" className="fav-icon" />
            <img src="image/shoe.svg" alt="" />
            <div className="card-details">
              <p className="desc">Sweet and Comfy Cotton Sweater</p>
              <span className="price">
                {" "}
                <p>$790.99</p> <p className="slashed">$400.40</p>
              </span>
              <hr />
              <span className="range">
                <input type="range" min="0" max="10" className="custom-range" />{" "}
                9/10 sales
              </span>
            </div>
          </div>
          <div className="flash-card">
            <img src="image/favorite.svg" alt="" className="fav-icon" />
            <img src="image/man.svg" alt="" className="man" />
            <div className="card-details">
              <p className="desc">Sweet and Comfy Cotton Sweater</p>
              <span className="price">
                {" "}
                <p>$790.99</p> <p className="slashed">$400.40</p>
              </span>
              <hr />
              <span className="range">
                {" "}
                <input type="range" min="0" max="10" className="custom-range" />
                9/10 sales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

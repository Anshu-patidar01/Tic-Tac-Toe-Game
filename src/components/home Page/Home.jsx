import React from "react";
import "./home.css";
import video from "../../assets/vedio.mp4";
import arrowImg from "../../assets/right-arrow.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home__container">
        <h1 className="scale-up-center">
          Welcome to <strong>Tic Tac Game</strong>
        </h1>
        <div className="container1">
          <video
            src={video}
            className=" object-fit-fill rounded container1 scale-up-center"
            autoPlay
            loop
            muted
          ></video>
          <div>
            <Link
              to={"PlayerNameForm"}
              className="btn btn-primary rounded-2 custom__play-button vibrate-1"
            >
              Play Game
            </Link>
            <Link
              to={"guid"}
              className="btn btn-primary text-white rounded-2 custom__play-button custom__play-button2 "
            >
              Guid me
              <img src={arrowImg} alt="" height={"15px"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

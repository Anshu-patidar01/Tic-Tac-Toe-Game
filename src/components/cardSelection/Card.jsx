import React from "react";
import AiImg from "../../assets/Designer (1).png";
import HumanImg from "../../assets/Designer (2).png";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div>
      <div className="custom__card-container">
        <h1>Select Mode</h1>
        <div className="container custom__card-container_inner ">
          <div className="card custom__card custon__card-ai custom__bg">
            <img src={HumanImg} className="card-img rounded-5" alt="..." />
            <div className="card-body custom__bg custom-text">
              <h5 className="card-title">
                <strong>Two Player Game</strong>
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={"PlayerNameForm"} className="btn btn-primary">
                Play with Friends
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

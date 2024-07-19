import React, { useState } from "react";
import "./playerInfo.css";
import { Link } from "react-router-dom";
import { addFirstName, addSecondName } from "../../redux/counter/counterSlice";
import { useDispatch } from "react-redux";

function PlayerInfo() {
  const dispatch = useDispatch();
  const [fName, setFName] = useState("X");
  const [sName, setSName] = useState("O");

  const nameHandler = () => {
    if (fName === "") {
      dispatch(addFirstName("X"));
      dispatch(addSecondName("O"));
    } else {
      dispatch(addFirstName(fName));
      dispatch(addSecondName(sName));
    }
  };

  return (
    <>
      <div className="Form__container">
        <h1>Enter Your Names</h1>
        <div className="player1">
          <label htmlFor="playerName1">Player 1 -</label>
          <input
            type="text"
            id="playerName1"
            placeholder="Enter Name here"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="player1">
          <label htmlFor="playerName2">Player 2 -</label>
          <input
            type="text"
            id="playerName2"
            placeholder="Enter Name here"
            value={sName}
            onChange={(e) => setSName(e.target.value)}
          />
        </div>
        <div>
          <Link
            to={"multiGame"}
            type="button"
            className="btn btn-primary custom-button"
            onClick={nameHandler}
          >
            Let's Play
          </Link>
        </div>
      </div>
    </>
  );
}

export default PlayerInfo;

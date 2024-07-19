import React, { useRef, useState } from "react";
import circle_icon from "../GameAssets/circle.png";
import cross_icon from "../GameAssets/cross.png";
import "./multiGame.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let data = ["", "", "", "", "", "", "", "", ""];

function MultiGame() {
  const firstName = useSelector((state) => state.counter.firstName);
  const secondName = useSelector((state) => state.counter.secondName);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const playerRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  let box_arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] !== "") {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="x"/>`;
      playerRef.current.innerHTML = `<h4>Player ${secondName} its your turn</h4>`;
      data[num] = firstName;
      // data[num] = "x";
      setCount(count + 1);
      console.log(count);
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="o"/>`;
      playerRef.current.innerHTML = `<h4>Player ${firstName} its your turn</h4>`;
      data[num] = secondName;
      // data[num] = "o";
      setCount(count + 1);
      console.log(count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === firstName) {
      titleRef.current.innerHTML = `Congratulations :<span class="span1"> ${firstName}${" "}</span>you Won`;
    } else {
      titleRef.current.innerHTML = `Congratulations :<span class="span1"> ${secondName}${" "}</span> you Won`;
    }
  };

  const reset = () => {
    console.log("Cliked reset");
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = ` Tic Tac Toe Games In <span class="title1">React</span>`;

    box_arr.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Games In <span>React</span>
        </h1>
        <h4 ref={playerRef}>Player {firstName} its your turn</h4>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <Link
          type="button"
          className="reset btn btn-primary"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Link>
      </div>
    </>
  );
}

export default MultiGame;

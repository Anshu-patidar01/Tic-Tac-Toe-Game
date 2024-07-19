import React from "react";
import "./multiplayerGame.css";
import MultiGame from "./multiGame/MultiGame";
import { Outlet } from "react-router";
function MultiPlayerGame() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default MultiPlayerGame;

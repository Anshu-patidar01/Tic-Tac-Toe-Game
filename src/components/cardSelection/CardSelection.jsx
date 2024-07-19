import React from "react";
import "./cardSelection.css";
import { Outlet } from "react-router-dom";

function CardSelection() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default CardSelection;

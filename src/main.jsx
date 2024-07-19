import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home Page/Home.jsx";
import CardSelection from "./components/cardSelection/CardSelection.jsx";
import PlayerInfo from "./components/playerInfo/PlayerInfo.jsx";
import Guid from "./components/guid/Guid.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/Login.jsx";
import MultiPlayerGame from "./components/multiPlayerGame/MultiPlayerGame.jsx";
import Card from "./components/cardSelection/Card.jsx";
import MultiGame from "./components/multiPlayerGame/multiGame/MultiGame.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      {/* <Route path="card" element={<CardSelection />}> */}
      {/* <Route path="" element={<Card />} /> */}
      <Route path="PlayerNameForm" element={<MultiPlayerGame />}>
        <Route path="" element={<PlayerInfo />} />
        <Route path="multiGame" element={<MultiGame />} />
        {/* </Route> */}
      </Route>
      <Route path="guid" element={<Guid />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

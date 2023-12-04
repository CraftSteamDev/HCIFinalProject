import "./App.css";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import CreateTimer from "./CreateTimer";
import Main from "./Main";
import NavBar from "./NavBar";

function App() {
  const activeTimer = useState({
    active: false,
    timeLeft: 0,
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/createTimer" element={<CreateTimer />} />
          <Route path="/" default element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

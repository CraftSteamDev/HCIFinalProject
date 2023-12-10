import "./App.css";
import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
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
import Timer from "./Timer";
import Exercise from "./Exercise";

function App() {
    const [activeTimer, setActiveTimer] = useState({
        timerEnd: null,
        active: false
    });

    return (
        <div id={"app_box"}>
            <NavBar/>
            <Routes>
                <Route path="/createTimer" element={<CreateTimer setTimeEnd={(time) => {
                    const newTimer = Object.assign({}, activeTimer)
                    newTimer.timerEnd = time
                    setActiveTimer(newTimer)
                }}/>}/>
                <Route path="/" default element={<Main/>}/>
                <Route path="timer" element={<Timer time_finished={activeTimer.timerEnd}/>}/>
                <Route path="exercise" element={<Exercise />}/>
            </Routes>
        </div>
    );
}

export default App;

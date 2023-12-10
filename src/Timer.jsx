import React from "react";
import moment from "moment";
import './styles/Timer.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router";

const Timer = (props) => {
    const nav = useNavigate()
    return <div className={"parent"}>
        <div id={"clock_label"}>{`Time Left`}</div>
        <div id={"clock"}>{`00:09:56`}</div>
        <div className={"button_container"}>
            <Button sx={{margin: 3}} variant="contained">Pause</Button>
            <Button sx={{margin: 3}} onClick={() => nav("/")} className={"timer_button"} variant="contained" color={"error"}>Cancel</Button>
        </div>
        <div id={"break_label"}>{`Break In`}</div>
        <div id={"break"}>{`00:03:51`}</div>
    </div>
}

export default Timer
import React from 'react'
import NavBar from "./NavBar";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import './styles/Main.css'

const Main = (props) => {
    const nav = useNavigate()
    return (
        <div className={"box"}>
            <h1 className={"title"}>Choose One</h1>
            <Button className={"button"} onClick={() => nav("/createTimer")} variant={"contained"}>Timer</Button>
            <Button className={"button"} onClick={() => nav("/exercise")} variant={"contained"}>Exercise</Button>
        </div>
    )

}

export default Main

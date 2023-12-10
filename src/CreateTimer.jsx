import {Box, Button, Grid, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, {useState} from "react";
import "./styles/CreateTimer.css";
import {useNavigate} from "react-router";
import moment from "moment";

const CreateTimer = (props) => {
    const [durationInput, setDurationInput] = useState(10);
    const [numBreaks, setNumBreaks] = useState(1);
    const [breakDuration, setBreakDuration] = useState(2);

    const nav = useNavigate()

    return (
        <div className="mainBox">
            <Box className="box" display="flex" justifyContent="center" alignItems="center">
                <TextField
                    className="inputField center"
                    label={"Timer Duration"}
                    value={durationInput}
                    onChange={(event) => setDurationInput(event.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">min</InputAdornment>,
                    }}
                ></TextField>
            </Box>
            <Box className="box" display="flex" justifyContent="center" alignItems="center">
                <TextField
                    className="inputField"
                    label={"Number of Breaks"}
                    value={numBreaks}
                    onChange={(event) => setNumBreaks(event.target.value)}
                ></TextField>
            </Box>
            <Box className="box" display="flex" justifyContent="center" alignItems="center">
                <TextField
                    className="inputField center"
                    label={"Break Duration"}
                    value={breakDuration}
                    onChange={(event) => setBreakDuration(event.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">min</InputAdornment>,
                    }}
                ></TextField>
            </Box>

            <Box className="box" display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => {
                    props.setTimeEnd(moment().add(10, 'minutes').toDate())
                    nav("/timer")
                }} variant="contained">START!</Button>
            </Box>
        </div>
    );
};

export default CreateTimer;

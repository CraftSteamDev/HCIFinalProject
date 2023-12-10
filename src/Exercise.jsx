import React from "react";
import {Button, FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import music from './public/music.webp'
import './styles/Exercise.css'

const Exercise = (props) => {
    return (
        <div>
            <FormControl variant="standard" sx={{m: 1, minWidth: "80vw", margin: 5}}>
                <InputLabel id="instrument-select-label">Instrument</InputLabel>
                <Select
                    label={"Select Instrument"}
                    id={"instrument-select"}
                    labelId={"instrument-select-label"}
                    defaultValue={"piano"}
                >
                    <MenuItem value={"piano"}>Piano</MenuItem>
                    <MenuItem value={"guitar"}>Guitar</MenuItem>
                    <MenuItem value={"vocal"}>Vocal</MenuItem>
                </Select>
            </FormControl>
            <div className={"next-container"}>
                <Button className={"next"} variant={"contained"}>Next</Button>
            </div>
            <img className={"image"} src={music}/>
        </div>
    )
}

export default Exercise
import React , {useState, useEffect} from "react";
import { Switch } from "@mui/material";

function LightMode(){

    let[isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor =
        isOn ? "white" : "#606060",

        document.getElementById("footer").style.backgroundColor = 
        isOn ? "grey" : "#484848" ;

        document.getElementById("header").style.backgroundColor = 
        isOn ? "SandyBrown" : "#F87D5F" ;

        document.getElementById("headtext").style.backgroundColor = 
        isOn ? "chocolate" : "#F86437" ;

        //document.getElementById("bt").style.backgroundColor = 
        //isOn ? "chocolate" : "#F86437" ;
    },
    [isOn]
    );
 
    return <Switch color="warning" checked={isOn} onChange={() =>
     setIsOn(!isOn)
    } />
}

export default LightMode;
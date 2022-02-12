import { ColorPicker, useColor } from "react-color-palette";
import React, { useState, useEffect } from 'react';
import "react-color-palette/lib/css/styles.css";
import Colorcard1 from "./color-card";



export const ColorPicker1 = () => {
    const [color, setColor] = useColor("hex", "#121212");
   
    const setcardcolor = (props) => {
        return <h1>Set color called</h1>
    };
    return(

        <div>
            <Colorcard1 color={color} />
            <ColorPicker width={456} height={228} color={color} onChange={setColor}  hideHSV dark/>
            <button onClick={() =>{
                console.log(color);     
                setcardcolor(color)           
            }
           }
            > Insert</button>
        </div>
    )   
};
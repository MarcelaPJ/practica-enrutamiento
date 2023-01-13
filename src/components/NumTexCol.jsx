import React from "react";
import { useParams } from "react-router-dom";


const NumTexCol = (props) => {
    const { text, color , fondo } = useParams();

    return (
        <div>
            {
                isNaN(text) ?   // if text is not a number //color? = does color exist? // if doesn't color exist, then null
                <p style={color ? {color: color, backgroundColor: fondo}: null}> 
                    The word is: {text}
                </p>
                :               // else text is a number
                <p>
                    The number is: {text}
                </p>
            }
        </div>
    );
}
export default NumTexCol;
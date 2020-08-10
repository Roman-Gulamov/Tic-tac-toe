import React from 'react';
import { Cells } from "./Сells";

export const Field = ({ squares, onClick, disabled, winnerShape, winnerColor }) => {
    return(
        <>
            {squares.map((shape, index) => (
                <Cells
                    key={index} 
                    data={index} 
                    onClick={(event) => onClick(event)} 
                    shape={shape}
                    disabled={disabled}
                    winnerShape={
                        (winnerShape && winnerColor.find(winnerElem => winnerElem === index) !== undefined) ?
                            "field__winnerColor" : ""
                    }
                />
            ))}
        </>
    );
};
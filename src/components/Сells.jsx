import React from "react";

export const Cells = ({ data, shape, onClick, winnerShape, disabled }) => {
    
    const findCell = 
        data === 0 ? "top left" : "" || 
        data === 1 ? "top" : "" || 
        data === 2 ? "top right" : "" ||
        data === 3 ? "left" : "" ||
        data === 5 ? "right" : "" ||
        data === 6 ? "left bottom" : "" ||
        data === 7 ? "bottom" : "" ||
        data === 8 ? "bottom right" : ""
        
    return (
        <>
            <div 
                data={data}
                className={`field__board ${findCell} ${shape} ${winnerShape} ${disabled}`} 
                onClick={onClick} 
            >
                <span>{shape}</span>
            </div>
        </>
    );
};
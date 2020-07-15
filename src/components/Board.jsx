import React from 'react';
import Square from "./Square";

const Board = ({ squares, onClick, winner }) => {
    return(
        <>
            {squares.map((square, index) => (
                <Square
                    key={index} 
                    data={index} 
                    onClick={(index) => onClick(index)} 
                    value={square}
                    winner={winner}
                />
            ))}
        </>
    );
};

export default Board;


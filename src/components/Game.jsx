import React, { useState } from 'react';
import { Field } from './Field';
import { winnerLine } from './winnerLine/winnerLine';


export const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winnerColor, setWinnerColor] = useState(Array(9).fill(null));
    const [count, setCount] = useState(0);
    const [result, setResult] = useState("");
    const [winner, setWinner] = useState("");
    const [disabled, setDisabled] = useState();
    
    const xO = (count % 2 === 0) ? "X" : "O";
    const findWinner = (!squares.includes(null) && winner === "") ? "Draw" : "";
    const whoNext = (squares.includes(null) && winner === '') ? `Next Player: ${xO}` : "";


    const clickHandler = (event) => {
        const data = event.target.getAttribute("data");   // номер квадрата, по которому кликнули
        let currentSquares = squares;
            if (currentSquares[data] === null) {
                currentSquares[data] = xO;
                setSquares(currentSquares);
                setWinnerColor(currentSquares);
                setCount(count + 1);
                calculateWinner();
            }
    }

    const calculateWinner = () => {
        for (let i = 0; i < 8; i++) {
            let line = winnerLine[i];
            if (squares[line[0]] === xO && squares[line[1]] === xO && squares[line[2]] === xO) {
                setResult("Winner:");
                setWinner(xO);
                setWinnerColor(line);
                setDisabled("disabled");
                clearAfter();
            } else if (!squares.includes(null)) {
                setDisabled("disabled");
                clearAfter();
            }
        } 
    }

    const clearAfter = () => {
        setTimeout(() => {
            setSquares(Array(9).fill(null));
            setCount(0);
            setDisabled("");
            setWinner("");
            setResult("");
        }, 800);
    }

    return (
        <>
            <div className='field'>
                <div className='field__status'>
                    <span className={xO}>{whoNext}</span>
                    <span>{findWinner} {result} {winner}</span>
                </div>
                <Field 
                    onClick={clickHandler}
                    squares={squares} 
                    winnerShape={winner}
                    winnerColor={winnerColor}
                    disabled={disabled}
                />
            </div>
        </>
    )
}
import React from "react";

const Square = ({ value, onClick, data, winner }) => {

    const winnerClass = 
        winner === value  ? 'green' : '';

    return (
        <div className={`board ${value} ${winnerClass}`} onClick={onClick} data={data}>
            <span>{value}</span>
        </div>
    );
};

export default Square;
import React, { Component } from 'react';
import '../scss/Game.scss';
import Board from './Board';

export default class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            squares: Array(9).fill(null),
            count: 0,
            draw: 'Draw',
            winner: ''
        }

        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],          // Горизонталь
            [6, 7, 8],              

            [0, 3, 6],
            [1, 4, 7],          // Вертикаль
            [2, 5, 8],

            [0, 4, 8],          // Диагональ
            [2, 4, 6]           
        ]
    }
    
    isWinner = () => {
        const xO = (this.state.count % 2 === 0) ? "X" : "O";
        
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i]
            if (this.state.squares[line[0]] === xO &&
                this.state.squares[line[1]] === xO && 
                this.state.squares[line[2]] === xO) {
                    this.setState({
                        winner: xO
                    }); 
                    setTimeout(() => {
                        this.setState({
                            squares: Array(9).fill(null),
                            count: 0,
                            winner: ""
                        }); 
                    }, 1000)
                } else if (!this.state.squares.includes(null)) {
                    setTimeout(() => {
                        this.setState({
                            squares: Array(9).fill(null),
                            count: 0
                        }); 
                    }, 1000)
                }
        } 
    }

    clickHandler = (event) => {
        // data - номер квадрата, по которому кликнули
        let data = event.target.getAttribute("data");
        let currentSquares = this.state.squares;
            if (currentSquares[data] === null) {
                currentSquares[data] = (this.state.count % 2 === 0) ? "X" : "O";
                this.setState({
                    squares: currentSquares,
                    count: this.state.count + 1,
                    winner: ""
                });
            }
        this.isWinner();
    }

    render() {
        const whoNext = () => {
            if(this.state.winner === '' && this.state.squares.includes(null)) {
                return `Next Player:  ${(this.state.count % 2 === 0) ? "X" : "O"}`
            }
        }

        const result = () => {
            if (this.state.winner !== '') {
                return `Winner: ${this.state.winner}`
            } else if (!this.state.squares.includes(null)) {
                return this.state.draw
            }
        }

        const nextO = {
            color: "blue"
        }

        const nextX = {
            color: "red"
        }

        return (
            <div className='tic-tac-toe'>
                <Board 
                    onClick={this.clickHandler}
                    squares={this.state.squares} 
                    winner={this.state.winner}
                />
                <h4 className='whoNext' 
                    style={this.state.count % 2 === 0 ? nextX : nextO}>
                    {whoNext()}
                </h4>
                <h1 className='result'>{result()}</h1>
            </div>
        )
    }
}


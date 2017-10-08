import React, { Component } from 'react';
import './App.css';

const WINNING_COMBOS = [
  [0, 1, 2], //rows
  [3, 4, 5], //rows
  [6, 7, 8], //rows
  [0, 3, 6], //cols
  [1, 4, 7], //cols                    
  [2, 5, 8], //cols
  [0, 4, 8], //diag  
  [2, 4, 6]  //diag
]  
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Player_1_marker: "X",
      computer_marker: "O",
      currentTurn: "X",
      board: Array(9).fill(null),
      score: {
        player: 0,
        computer: 0
      }
    }
  }

  boardFull() {
    return !this.state.board.includes(null)
  }

  whoWon() {
    for(let i = 0; i < WINNING_COMBOS.length; i++) {
      if(
        this.state.board[WINNING_COMBOS[i][0]] === this.state.Player_1_marker &&
        this.state.board[WINNING_COMBOS[i][1]] === this.state.Player_1_marker &&
        this.state.board[WINNING_COMBOS[i][2]] === this.state.Player_1_marker
        ){
        return 'player'
      }
      else if(
        this.state.board[WINNING_COMBOS[i][0]] === this.state.computer_marker &&
        this.state.board[WINNING_COMBOS[i][1]] === this.state.computer_marker &&
        this.state.board[WINNING_COMBOS[i][2]] === this.state.computer_marker
      ){
        return 'computer'
      }
    }
    return null
  }

  updateScore(player) {
    this.state.score[player]++
    // this.forceUpdate()
  }

  reset() {
    this.setState({
      currentTurn: null,
      board: Array(9).fill(null)
    })
  }

  alertMessage() {
    // this.forceUpdate() 
    alert(this.whoWon().toUpperCase() + ' has won!!!')
  }

  someoneWon(){
    return !!this.whoWon()
  }

  playerAlmostWon(marker) {
    for(let i = 0; i < WINNING_COMBOS.length; i++) {
      let line = WINNING_COMBOS[i]
      let arr = [
        this.state.board[line[0]],
        this.state.board[line[1]],
        this.state.board[line[2]]
      ]

      if(arr.filter((value) => value === marker).length === 2) {
        for(let j = 0; j < 3; j++) {
          if(this.state.board[line[j]] === null) {
            console.log(line[j])
            return line[j]
          }
        }
      }
    }
    return false
  }

  componentDidUpdate() {
    if(this.state.currentTurn === 'O' && !this.someoneWon()) {
      setTimeout(this.computerTurn.bind(this), 100) 
    }

    if(this.someoneWon()) {
      setTimeout(this.alertMessage.bind(this), 300)
      setTimeout(this.reset.bind(this), 500) 
      this.updateScore(this.whoWon())
    }

    if(!this.someoneWon() && this.boardFull()) {
      alert('board is full')
      this.reset()
    }
  }

  computerTurn() {
    let index = this.playerAlmostWon(this.state.computer_marker) || this.playerAlmostWon(this.state.Player_1_marker)
    if(this.playerAlmostWon(this.state.computer_marker) === 0 || this.playerAlmostWon(this.state.Player_1_marker) === 0) {
      index = 0
    }
    console.log(index)
    if(!index && index !== 0) {
      if(this.state.board.indexOf('X') === 4) {
        if (this.state.board[2] == null) {
          index = 2
        }
        else if (this.state.board[6] == null) {
          index = 6
        }

        if(this.state.board[6] === 'X') {
          index = 0
        }
      } else {
        if (this.state.board[2] === 'X' && this.state.board[6] == null) {
          index = 6
        }

        if (this.state.board[6] === 'X' && this.state.board[2] == null) {
          index = 2
        }

        if (this.state.board[8] === 'X' && this.state.board[0] == null) {
          index = 0
        }

        if (this.state.board[0] === 'X' && this.state.board[8] == null) {
          index = 8
        }

        if ((this.state.board[2] === 'X' && this.state.board[6] === 'X') ||
            (this.state.board[0] === 'X' && this.state.board[8] === 'X') 
        ){
          for(let i = 0; i < 9; i++) {
            if((i === 1 && this.state.board[i] === null)||
               (i === 3 && this.state.board[i] === null)||
               (i === 5 && this.state.board[i] === null)||
               (i === 5 && this.state.board[i] === null)
              ) {
                index = i;
                break
              }
          }
        }
        
        if (this.state.board[4] == null) {
          index = 4
        }
      }
    }
    
    if(!index && index !== 0) {
      while( this.state.board[index] !== null ) {
        index = Math.floor(Math.random() * this.state.board.length) 
      }
    }

    this.handleClick(index)
  }

  handleClick(index) {
    if(this.state.board[index] === null) {
      this.setState({
        board: this.state.board.map(
          (marker, idx) => idx === index ? this.state.currentTurn : marker
        ),
        currentTurn: this.state.Player_1_marker === this.state.currentTurn ? this.state.computer_marker : this.state.Player_1_marker,
      })
    }
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>Tic-Tac-Toe</h1> 
          <ul>
            <h2>Players Scores</h2>
            <li>You: <span>{this.state.score.player}</span></li>
            <li>Com: <span>{this.state.score.computer}</span></li>
          </ul> 
        </header>
        <main>
          <div className="board">
            {this.state.board.map( 
              (cell, index) => <div className="square" onClick={
              () => this.handleClick(index)}>{this.state.board[index]}</div>
            )}
          </div>
        </main>
      </div>
    )
  }
}

export default App;

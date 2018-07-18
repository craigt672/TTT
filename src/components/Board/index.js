import React from 'react'
import Container from './styles'
import Square from './Square/styles'

const Board = props => (
  <Container>
      {
        props.board.map((cell, index) => (
          <Square
            key={index}
            onClick={() => props.handleClick(index)}
          >
            {props.board[index]}
          </Square>
        ))
      }
  </Container>
);

export default Board;
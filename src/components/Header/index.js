import React from 'react'
import ScoreBoard from './ScoreBoard/index'
import Container from './styles'

const Header = props => (
  <Container>
    <h1>Tic-Tac-Toe</h1>
    <ScoreBoard
      playerScore={props.playerScore}
      computerScore={props.computerScore}
    />
  </Container>
);

export default Header;
import React from 'react'
import Container from './styles'

const ScoreBoard = props => (
  <Container>
    <h2>Players Scores</h2>
    <li>You: <span>{props.playerScore}</span></li>
    <li>Com: <span>{props.computerScore}</span></li>
  </Container>
);

export default ScoreBoard;
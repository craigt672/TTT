import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  background: no-repeat linear-gradient(to bottom,black, white) fixed;
  width: 100%;
  height: 90px;
  padding: 2px 200px;
  box-sizing: border-box;
  margin: 0 auto 50px auto;
  color: white;
  box-shadow: 0px 5px 20px black;

  >h1 {
    position: absolute;
    margin: 0;
    top: 20px;
    left: 20px;
    padding: 0;
    background: no-repeat linear-gradient(to bottom, darkslateblue, wheat) fixed;
    border-radius: 70%;
    text-align: center;
    font-size: 2.8em;
    font-weight: bold;
    text-shadow: 4px 4px 4px navy;
    vertical-align: middle;
    box-shadow: inset 10px -5px 50px black;
    border-bottom: 1px solid #2D2946;
  }

  @media (max-width: 480px) {
    height: 90px;
    position: relative;
    top: 0;
    z-index: -100;
    margin: 0;
    padding: 0;

    >h1 {
      display: block;
      padding: 20px 0;
      box-sizing: border-box;
      position: static;
      width: 100%;
      height: 90px;
      background: no-repeat linear-gradient(to bottom, navy, black) fixed;
      border: none;
      font-size: 2.8em;
      margin: 0 auto;
      box-shadow: none;
      text-shadow: 4px 4px 4px black;
      border-color: black;
      box-shadow: inset 0 2px 10px skyblue;
      border-radius: 1px;
    }
  }
`

export default Container
import styled from 'styled-components'

const Container = styled.ul`
  position: absolute;
  top: 10px;
  right: 20px;
  background: no-repeat linear-gradient(to bottom, white, wheat) fixed;
  vertical-align: top;
  display: inline-block;
  list-style: none;
  width: 150px;
  margin: 0px 0px 0 200px;
  padding: 0;
  border: 2px solid navy;
  box-shadow: 0 4px 10px black;
  font-size: 1.8em;

  li {    
    color: navy;
    text-transform: uppercase;
    font-family: monospace;
    margin-left: 3px;
    text-align: left;
    letter-spacing: 1px;
    font-size: 0.6em;
  }

  li span {
    float: right;
  }

  h2 {
    font-size: 0.7em;
    font-weight: bolder;
    background: no-repeat linear-gradient(to bottom, skyblue, darkslateblue) fixed;
    border-bottom: 2px solid navy;
    color: navy;
    text-shadow: 4px 4px 4px wheat;
    padding-bottom: -30px;
    margin: 0;
  }

  @media (max-width: 480px) {
    position: absolute;
    z-index: 100;
    width: 100%;
    left: 0;
    right: 0;
    top: 90px;
    margin: 0 0 100px 0;
    box-sizing: border-box;
    background: no-repeat linear-gradient(to bottom, black, darkslateblue) fixed;
    border: none;
    box-shadow: none;

    li {
      margin: 0 20px;
      font-size: 0.8em;
      box-sizing: border-box;
      color: white;
    }

    h2 {
      display: none;
    }
  }
}
`

export default Container
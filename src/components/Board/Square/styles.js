import styled from 'styled-components'

const Square = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 2px solid navy;
  font-size: 5.3em;
  text-align: center;
  color: skyblue;

  :hover {
    color: white;
    background-color: skyblue;
    cursor: pointer;
  }

`

export default Square
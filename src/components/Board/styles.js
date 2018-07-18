import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  background-color: white;
  border: 2px solid navy;
  box-shadow: 0 4px 10px black;
  margin: 100px auto;
  margin-bottom: 20px;


  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`

export default Container
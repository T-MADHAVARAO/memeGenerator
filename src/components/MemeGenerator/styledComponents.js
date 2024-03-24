// Style your components here
import styled from 'styled-components'

export const Bg = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const CustomButton = styled.button`
  padding: 6px;
  color: white;
  background-color: blue;
  border: 0px none;
  border-radius: 4px;
`

export const Meme = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-image: url(${props => (props.show ? props.bgImg : 'white')});
`

export const Para = styled.p`
  font-size: ${props => props.text}px;
  color: white;
`

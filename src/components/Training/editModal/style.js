import styled from "styled-components";

const Wrapper = styled.div`
  display: ${props => props.active ?'flex' : 'none' };
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0,0,0,0.4);
  
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  position: relative;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  
  background-color: white;
`

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Styled = {
    Wrapper,
    Modal,
    Close
}
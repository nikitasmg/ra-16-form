import styled from "styled-components";
import InputMask from 'react-input-mask';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Button = styled.button`
  border: 2px solid black;
  background: transparent;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
`

const Form = styled.form`
  display: flex;
  align-items: self-end;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 40px;
`

const BorderedInput = styled(InputMask)`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
`

export const Styled = {
    Label,
    Button,
    Form,
    BorderedInput
}
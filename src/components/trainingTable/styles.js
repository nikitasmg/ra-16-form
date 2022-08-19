import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 20px;
`

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

export const EditButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: ${props => `url(${props.image})`};
  background-position: center center;
  background-size: cover;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent ;

`

export const Styled = {
    Header,
    Table,
    Row,
    EditButton,
    EditWrapper
}
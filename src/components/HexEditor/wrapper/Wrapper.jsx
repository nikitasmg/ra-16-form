import React from 'react';
import styled from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${props => props.background.length ? props.background : '#ea4b35'};
`

const Wrapper = ({children, ...props}) => {
    return (
        <StyledWrapper {...props} >
            {children}
        </StyledWrapper>
    );
};

export default Wrapper;
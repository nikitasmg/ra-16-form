import React from 'react';
import styled from 'styled-components'
const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 5px 10px;
  background: rgba(0,0,0,0.4);
  color: white;
  font-size: 15px;
  font-weight: bold;
`
const HexDisplay = ({children, ...props}) => {
    return (
        <Display {...props}>
            {children}
        </Display>
    );
};

export default HexDisplay;
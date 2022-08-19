import React from 'react';

import styled from 'styled-components'

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  background: #fff;
  width: 200px;
`
const MyInput = ({value, onChange}) => {
    return (
        <Input value={value} onChange={e => onChange(e.target.value)} />
    );
};

export default MyInput;
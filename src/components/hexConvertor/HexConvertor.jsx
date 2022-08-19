import React, {useState} from 'react';
import Wrapper from "../wrapper/Wrapper.jsx";
import MyInput from "../myInput/MyInput.jsx";
import HexDisplay from "../hexDisplay/HexDisplay.jsx";
import {hexToRGB} from "../../heplers/hexToRGB.js";

const HexConvertor = () => {
    const [color, setColor] = useState('')

    const backgroundColor = () => {
        if (color && color.length === 7 && hexToRGB(color)) {
            return color
        } else {
            return ''
        }
    }

    return (
        <>
            <Wrapper background={backgroundColor()}>
                <MyInput value={color} onChange={e => setColor(e)}/>
                <HexDisplay background={backgroundColor()}>{hexToRGB(color) ? hexToRGB(color) : 'Ошибка!'}</HexDisplay>
            </Wrapper>
        </>
    )
};

export default HexConvertor;
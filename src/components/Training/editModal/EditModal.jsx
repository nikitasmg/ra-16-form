import React from 'react';
import {Styled} from './style.js'

const EditModal = ({children,active, closeButton}) => {
    return (
        <Styled.Wrapper active={active}>
            <Styled.Modal>
                {children}
                <Styled.Close>
                    {closeButton}
                </Styled.Close>
            </Styled.Modal>

        </Styled.Wrapper>
    );
};

export default EditModal;
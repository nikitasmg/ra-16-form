import React from 'react';
import {Styled} from "./styles.js";

const TrainingTable = ({items, deleteItem ,editItem}) => {
    return (
        <div>
            <Styled.Header>
                <span>Дата (ММ/ДД/ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </Styled.Header>
            <Styled.Table>
                {items && items.map(el =>

                    <Styled.Row key={el.id}>
                        <span>{el.date}</span>
                        <span>{el.distance}</span>
                        <Styled.EditWrapper>
                            <Styled.EditButton
                                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Black_pencil.svg/2048px-Black_pencil.svg.png'}
                                onClick={() => editItem(el)}
                            />
                            <Styled.EditButton
                                image={'https://cdn-icons-png.flaticon.com/512/59/59254.png'}
                                onClick={() => deleteItem(el.id)}
                            />
                        </Styled.EditWrapper>
                    </Styled.Row>
                )}

            </Styled.Table>

        </div>
    );
};

export default TrainingTable;
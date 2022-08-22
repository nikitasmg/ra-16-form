import React, {useEffect, useState} from 'react';
import {Styled} from "./styles.js";
const TrainingInputs = ({handleClick, initialItem}) => {
    const [date, setDate] = useState('')
    const [distance, setDistance] = useState('')

    useEffect(() => {
        if (initialItem) {
            const {date, distance} = initialItem
            setDistance(distance)
            setDate(date)
        }

    }, [initialItem])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {id:Date.now(), date: new Date(date).toLocaleDateString(), distance}
        if (date && distance) {
            handleClick(data)
            setDate('')
            setDistance('')
        }
    }

    return (
        <Styled.Form onSubmit={(e) => handleSubmit(e)}>
            <Styled.Label>
                <span>  Дата (ДД/ММ/ГГ) </span>
                <Styled.BorderedInput  type='date' placeholder='Дата'  value={date} onChange={e => setDate(e.target.value)}/>
            </Styled.Label>
            <Styled.Label>
                <span>Пройдено км</span>
                <Styled.BorderedInput  value={distance} placeholder='Дистанция'  onChange={e => setDistance(e.target.value)}/>
            </Styled.Label>
            <Styled.Button type='submit'>OK</Styled.Button>
        </Styled.Form>
    );
};

export default TrainingInputs;
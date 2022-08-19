import React, {useState} from 'react';
import TrainingInputs from "../trainingInputs/TrainingInputs.jsx";
import TrainingTable from "../trainingTable/TrainingTable.jsx";
import styled from "styled-components";
import EditModal from "../editModal/EditModal.jsx";
import {EditButton} from "../trainingTable/styles.js";

const TrainingList = () => {
    const [trainings, setTrainings] = useState([])
    const [active, setActive] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const handleSetItems = (item) => {
        setTrainings(prev => [...prev, item])
    }
    const sortedTrainings = () => {
        return trainings.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    const deleteItem = (id) => {
        setTrainings(() => trainings.filter(el => el.id !== id))
    }

    const editItem = (item) => {
        setActive(true)
        setCurrentItem(item)
    }

    const editCurrentItem = (item) => {
       const newTrainings = trainings.map(el => {
            if (el.id === currentItem.id) {
                return el = {...item}
            }})

        setTrainings(newTrainings)
        setActive(false)
    }

    const Wrapper = styled.div`
      padding: 20px 50px;
      border: 2px solid black;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
    return (
        <>
            <Wrapper>
                <TrainingInputs handleClick={e => handleSetItems(e)}/>
                <TrainingTable
                    items={sortedTrainings()}
                    deleteItem={(id) => deleteItem(id)}
                    editItem={(item) => editItem(item)}
                />
            </Wrapper>
            <EditModal active={active}
                       closeButton={<EditButton
                           image={'https://cdn-icons-png.flaticon.com/512/59/59254.png'}
                           onClick={() => setActive(false)}
                       />}>
                <TrainingInputs initialItem={currentItem}  handleClick={e => editCurrentItem(e)}/>
            </EditModal>
        </>

    );
};

export default TrainingList;
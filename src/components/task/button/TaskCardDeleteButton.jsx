import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.button`
  border: none;
  background-color: rgb(228, 228, 228);
  cursol: pointerl
  font-size: 16px;
  color: rgb(158, 46,46);
`;

const deleteTaskCard = (id, taskCardsList, settaskCardsList) => {
  const updatedTaskCardList = [...taskCardsList].filter((taskCard) => taskCard.id !== id);
  settaskCardsList(updatedTaskCardList);
};

const TaskCardDeleteButton = (props) => {
  const { id, taskCardsList, settaskCardsList } = props;
  return (
    <DeleteButton onClick={() => deleteTaskCard(id, taskCardsList, settaskCardsList)}>
      <i className="fa-solid fa-xmark"></i>
    </DeleteButton>
  );
};

export default TaskCardDeleteButton;

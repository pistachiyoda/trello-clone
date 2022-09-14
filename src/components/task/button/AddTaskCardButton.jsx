import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Wrapper = styled.div`
  margin-left: 1%;
  margin-top: 25px;
`;
const AddButton = styled.button`
  cursor: pointer;
  margin-right: 9px;
  border: none;
  padding: 10px 18px;
  border-radius: 9999px;
  font-size: 30px;
  background-color: rgb(221, 194, 162);
  box-shadow: 3px 3px 8px 1px black;
  transition: all 0.3s;
  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;

const AddTaskCardButton = (props) => {
  const { taskCardsList, settaskCardsList } = props;

  const addTaskCard = () => {
    settaskCardsList([
      ...taskCardsList,
      {
        id: uuidv4(),
        draggableid: `task-${uuidv4()}`,
      },
    ]);
  };
  return (
    <Wrapper>
      <AddButton onClick={addTaskCard}>+</AddButton>
    </Wrapper>
  );
};

export default AddTaskCardButton;

import React from 'react';
import TaskCardTitle from './TaskCardTitle';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskAddInput from './input/TaskAddInput';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  padding: 10px 25px;
  margin: 10px 1%;
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
`;

const TaskCard = () => {
  return (
    <Container>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
    </Container>
  );
};

export default TaskCard;

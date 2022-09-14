import React, { useState } from 'react';
import TaskCardTitle from './TaskCardTitle';
import TaskCardDeleteButton from './button/TaskCardDeleteButton';
import TaskAddInput from './input/TaskAddInput';
import styled from 'styled-components';
import Tasks from './Tasks';

const Container = styled.div`
  width: 250px;
  padding: 10px 25px;
  margin: 10px 1%;
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
`;

const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskCard = (props) => {
  const { id, taskCardsList, settaskCardsList } = props;
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);
  return (
    <Container>
      <TaskCardHeader>
        <TaskCardTitle />
        <TaskCardDeleteButton
          id={id}
          taskCardsList={taskCardsList}
          settaskCardsList={settaskCardsList}
        />
      </TaskCardHeader>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </Container>
  );
};

export default TaskCard;

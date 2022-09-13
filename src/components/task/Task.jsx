import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgb(75, 75, 75);
`;

const TaskText = styled.p`
  margin-left: 12px;
`;

const TaskTrashButton = styled.button`
  margin-right: 9px;
  border: none;
  cursor: pointer;
`;

const Task = (props) => {
  const { task, taskList, setTaskList } = props;
  const handleDelete = (id, taskList, setTaskList) => {
    const updatedTaskList = taskList.filter((task) => id !== task.id);
    setTaskList(updatedTaskList);
  };
  return (
    <Draggable index={task.id} draggableId={task.draggableId}>
      {(provided) => (
        <TaskBox {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <TaskText>{task.text}</TaskText>
          <TaskTrashButton onClick={() => handleDelete(task.id, taskList, setTaskList)}>
            <i className="fa-solid fa-trash-can"></i>
          </TaskTrashButton>
        </TaskBox>
      )}
    </Draggable>
  );
};

export default Task;

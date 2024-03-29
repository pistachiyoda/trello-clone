import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = styled.input`
  width: 100%;
  font-size: 1.3rem;
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

const TaskAddInput = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === '') return;
    setTaskList([
      ...taskList,
      {
        id: `${uuidv4()}`,
        draggableId: `task-${uuidv4()}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TaskInput type="text" placeholder="add a task" value={inputText} onChange={handleChange} />
      </form>
    </div>
  );
};

export default TaskAddInput;

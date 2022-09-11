import React from 'react';

const Tasks = (props) => {
  const { inputText, taskList } = props;
  return (
    <div>
      {taskList.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  );
};

export default Tasks;

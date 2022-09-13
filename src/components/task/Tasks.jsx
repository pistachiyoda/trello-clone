import React from 'react';
import Task from './Task';

const Tasks = (props) => {
  const { taskList, setTaskList } = props;
  return (
    <div>
      {taskList.map((task, index) => (
        <Task key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </div>
  );
};

export default Tasks;

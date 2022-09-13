import React from 'react';
import Task from './Task';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const onDragEnd = (e) => {
    console.log(e);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task, index) => {
                return (
                  <Task
                    key={index}
                    task={task}
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;

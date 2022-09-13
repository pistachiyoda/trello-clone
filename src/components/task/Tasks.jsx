import React from 'react';
import Task from './Task';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    const updatedTaskList = [...taskList];
    const movedTask = updatedTaskList.splice(source.index, 1);
    updatedTaskList.splice(destination.index, 0, movedTask[0]);
    setTaskList(updatedTaskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task, index) => {
                return (
                  <Task
                    key={task.id}
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

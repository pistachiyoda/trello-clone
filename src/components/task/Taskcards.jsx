import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const TaskCardArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const TaskCards = () => {
  const [taskCardsList, settaskCardsList] = useState([
    {
      id: 0,
      draggableid: '0',
    },
  ]);

  const handleDragEnd = (event) => {
    console.log(event);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <TaskCardArea ref={provided.innerRef} {...provided.droppableProps}>
            {taskCardsList.map((taskCard, index) => {
              return (
                <TaskCard
                  index={index}
                  key={taskCard.id}
                  id={taskCard.id}
                  taskCard={taskCard}
                  taskCardsList={taskCardsList}
                  settaskCardsList={settaskCardsList}
                />
              );
            })}
            {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} settaskCardsList={settaskCardsList} />
          </TaskCardArea>
        )}
      </Droppable>
    </DragDropContext>
  );
};

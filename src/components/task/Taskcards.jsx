import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import styled from 'styled-components';

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
      draggableid: 0,
    },
  ]);
  return (
    <TaskCardArea>
      {taskCardsList.map((taskCardList) => {
        return (
          <TaskCard
            key={taskCardList.id}
            id={taskCardList.id}
            taskCardsList={taskCardsList}
            settaskCardsList={settaskCardsList}
          />
        );
      })}
      <AddTaskCardButton taskCardsList={taskCardsList} settaskCardsList={settaskCardsList} />
    </TaskCardArea>
  );
};

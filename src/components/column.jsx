import React from 'react';
import { Item } from './Item';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;

export const Column = (props) => {
  const { column, tasks } = props;
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => {
              return <Item key={task.id} id={task.id} content={task.content} index={index}></Item>;
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </Container>
  );
};

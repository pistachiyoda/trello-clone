import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.li`
    border: 1px solid lightgrey;
    padding: 8px;
    margin: 8px;
    border-radius: 2px;
    list-style: none;
`;

export const Item = (props) => {
  const { id, content, index } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {content}
        </Container>
      )}
    </Draggable>
  );
};

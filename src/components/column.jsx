import React from 'react';
import { Item } from './Item';
import styled from 'styled-components';

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
      <ul>
        {tasks.map((task, index) => {
          return <Item id={task.id} content={task.content}></Item>;
        })}
      </ul>
    </Container>
  );
};

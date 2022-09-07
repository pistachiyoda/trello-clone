import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 2px;
    list-style: none;
`;

export const Item = (props) => {
  const { id, content } = props;
  return <Container>{content}</Container>;
};

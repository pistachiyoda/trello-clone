import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 45px;
  color: aliceblue;
  font-weight: 600;
  text-shadow: 2px 2px 2px black;
`;

const Top = styled.header`
  text-align: center;
  padding: 4px 10%;
  margin-bottom: 50px;
  background-color: rgb(102, 94, 74);
`;
export const Header = () => {
  return (
    <div>
      <Top>
        <Title>Trello Clone</Title>
      </Top>
    </div>
  );
};

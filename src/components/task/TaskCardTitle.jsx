import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 10px;
  width: 30%;
  corsor: pointer;
`;

const TitleInput = styled.input`
  width: 100px;
  font-size: 1.1rem;
  padding: 4px 6px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('default');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    if (e.target.value.length === 0) return setInputCardTitle('default');
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = (e) => {
    setIsClick(false);
  };

  return (
    <Container onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <TitleInput
            autoFocus
            maxLength={15}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </Container>
  );
};

export default TaskCardTitle;

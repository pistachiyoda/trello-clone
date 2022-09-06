import React from 'react';

export const Item = (props) => {
  const { id, content } = props;
  return <li>{content}</li>;
};

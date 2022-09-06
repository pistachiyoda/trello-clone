import React from 'react';
import { Item } from './Item';

export const Column = (props) => {
  const { column, tasks } = props;
  console.log(column);
  console.log(tasks);
  return (
    <div>
      <p>{column.title}</p>
      <ul>
        {tasks.map((task, index) => {
          return <Item id={task.id} content={task.content}></Item>;
        })}
      </ul>
    </div>
  );
};

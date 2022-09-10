import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from './components/column';
import initialData from './initial-data';
import { Header } from './components/header/Header';
import styled from 'styled-components';
import bgimg from '../src/images/image.jpg';
import { TaskCards } from './components/task/Taskcards';

const Wrapper = styled.div`
  background: url(${bgimg});  
  background-repeat: no-repeat;
  background-size: cover; 
  height: 100vh;
`;

function App() {
  const [taskData, setTaskData] = useState(initialData);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.draggableId && destination.index === source.index)
      return;
    const column = taskData.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newState = {
      ...taskData,
      columns: {
        ...taskData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setTaskData(newState);
  };

  return (
    <div className="test">
      <Wrapper>
        <Header></Header>
        <TaskCards />
        {/* <DragDropContext onDragEnd={onDragEnd}>
          {taskData.columnOrder.map((columnId) => {
            const column = taskData.columns[columnId];
            const tasks = column.taskIds.map((taskId) => taskData.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext> */}
      </Wrapper>
    </div>
  );
}

export default App;

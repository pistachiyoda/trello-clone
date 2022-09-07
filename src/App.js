import { Column } from './components/column';
import initialData from './initial-data';
import '@atlaskit/css-reset';

function App() {
  return initialData.columnOrder.map((columnId) => {
    const column = initialData.columns[columnId];
    const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
}

export default App;

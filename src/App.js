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
  return (
    <div className="test">
      <Wrapper>
        <Header></Header>
        <TaskCards />
      </Wrapper>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import ListTask from './components/ListTask.jsx/ListTask';
import operations from './redux/task/operations';
import Timer from './components/Timer';
import Panel from './components/Panel';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getTask());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Timer />
        <Panel />
        <ListTask />
      </Container>
    </>
  );
}

export default App;

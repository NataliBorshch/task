import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import ListTask from './components/ListTask.jsx/ListTask';
import operations from './redux/task/operations';
import selectors from './redux//task/selectors';
import Timer from './components/Timer';
import Panel from './components/Panel';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);
  

  useEffect(() => {
    dispatch(operations.getTask());
   }, [] );

  return (
    <>
      <AppBar />
      <Container>
        <Timer />
        <Panel />
        {isLoading ? <h1>Загружаем</h1> :<ListTask  />}
      </Container>
    </>
  );
}

export default App;

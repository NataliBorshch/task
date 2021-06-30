import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import FormCreateTask from './components/FormCreateTask';
import ListTask  from "./components/ListTask.jsx/ListTask";
import operations  from './redux/task/operations';





function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getTask());
  }, [dispatch]);


  return (
 <> 
    <AppBar/>
 <Container>
   <FormCreateTask/>
   <ListTask/>
    
  
      </Container>
 </>

  );
}

export default App;
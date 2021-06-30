import AppBar from "./components/AppBar";
import Container from "./components/Container";
import FormCreateTask from "./components/FormCreateTask";

export default function App() {
  return (
    <div>
      <AppBar />
      <Container>
        <FormCreateTask />
      </Container>
    </div>
  );
}

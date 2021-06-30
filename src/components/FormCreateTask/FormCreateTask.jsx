import "./Form.scss";

export default function FormCreateTask() {
  return (
    <form>
      <label>
        Name
        <input type="text" placeholder="name task" required />
      </label>

      <label>
        Description
        <input type="text" placeholder="description task" required />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

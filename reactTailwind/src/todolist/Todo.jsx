import { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setTasks(tasks.map((task, index) => (index === idToEdit ? input : task)));
      setIsEditing(false);
      setIdToEdit(null);
    } else setTasks([...tasks, input]);

    setInput("");
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task, index) => index !== id));
  }
  function handleEdit(id) {
    setIsEditing(true);
    setIdToEdit(id);
    setInput(tasks.find((task, index) => index === id));
  }

  return (
    <>
      <div className="w-2/4 px-4 py-4 m-auto">
        <h2 className="font-bold text-3xl">Todo List</h2>
        <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
        <List
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}
export default Todo;

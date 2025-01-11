import { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div className="w-2/4 px-4 py-4 m-auto">
        <h2 className="font-bold text-3xl">Todo List</h2>
        <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
        <List tasks={tasks} />
      </div>
    </>
  );
}
export default Todo;

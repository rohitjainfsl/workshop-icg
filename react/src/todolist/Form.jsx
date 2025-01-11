import { useState } from "react";

function Form({ input, setInput, tasks, setTasks }) {
  //   function changeInput(e) {
  //     setInput(e.target.value);
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, input]);
  }
  console.log(tasks);
  return (
    <>
      <form action="" className="my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          className="p-3 mb-4 border-2 rounded"
          value={input}
          //   onChange={changeInput}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
          Add Task
        </button>
      </form>
    </>
  );
}
export default Form;

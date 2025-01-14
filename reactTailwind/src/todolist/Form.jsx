import { useState } from "react";

function Form({ input, setInput, handleSubmit }) {
  //   function changeInput(e) {
  //     setInput(e.target.value);
  //   }
  
  
  return (
    <>
      <form
        action=""
        className="my-4 flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your task"
          className="p-3 border-2 rounded w-3/4"
          value={input}
          //   onChange={changeInput}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="p-3 w-1/4 border-2 bg-black text-white rounded"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
export default Form;

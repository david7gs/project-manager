import { useState, useRef, useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Modal from "./Modal";

export default function NewTask() {
  const { addTask } = useContext(ProjectManagerContext);
  const modal = useRef();
  const [taskInput, setTaskInput] = useState("");

  function handleChange(event) {
    setTaskInput(event.target.value);
  }
  function handleClick() {
    if (taskInput.trim() === "") {
      modal.current.open();
      return;
    }
    addTask(taskInput);
    setTaskInput("");
  }
  const classes = "w-64 p-1 border-b-2 rounded-md border-teal-300/20 focus:border-teal-300/50 bg-teal-400/10 text-slate-200 focus:outline-none focus:border-stone-600";
  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to add a task.</p>
        <p className="text-stone-600 mb-4">Please make sure to add a task</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input onChange={handleChange} value={taskInput} type="text" className={classes} />
        <button onClick={handleClick} className="hover:text-teal-300">
          Add Task
        </button>
      </div>
    </>
  );
}

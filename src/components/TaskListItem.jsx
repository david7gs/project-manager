import { useContext, useState, useRef, useEffect } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Modal from "./Modal";

export default function TaskListItem({ task }) {
  const [taskInput, setTaskInput] = useState(task.task);
  const [isEdit, setEdit] = useState(false);
  const modal = useRef();
  const { editTask, deleteTask } = useContext(ProjectManagerContext);
  useEffect(() => {
    setEdit(false);
  }, [task.id]);

  const classes = "w-64 p-1 border-b-2 rounded-md border-teal-300/20 focus:border-teal-300/50 bg-teal-400/10 text-slate-200 focus:outline-none focus:border-stone-600";

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  let taskField = <span className="task">{task.task}</span>;
  let taskEditButton = (
    <button id={task.id} onClick={() => handleEditTask(task.id)} className="edit hover:text-teal-400">
      Edit
    </button>
  );

  if (isEdit) {
    taskField = <input className={classes} type="text" value={taskInput} onChange={handleChange} />;
    taskEditButton = (
      <button id={task.id} onClick={() => handleSaveTask(task.id)} className="save hover:text-teal-400">
        Save
      </button>
    );
  }

  function handleEditTask(id) {
    setTaskInput(task.task);
    setEdit((prevState) => {
      return !prevState;
    });
  }

  function handleSaveTask(id) {
    if (taskInput.trim() === "") {
      modal.current.open();
      return;
    }
    editTask(taskInput, task.id);
    setEdit((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to add a task.</p>
        <p className="text-stone-600 mb-4">Please make sure to add a task</p>
      </Modal>
      <li key={task.id} className="task-li flex justify-between my-4 sm:text-lg">
        {taskField}
        <div className="button-container">
          {taskEditButton}
          <button id={task.id} onClick={() => deleteTask(task.id)} className="hover:text-red-500">
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

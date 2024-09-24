import { useRef, useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject() {
  const { addProject, cancelNewProject } = useContext(ProjectManagerContext);

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const titleInput = title.current.value;
    const descriptionInput = description.current.value;
    const dueDateInput = dueDate.current.value;

    if (titleInput.trim() === "" || descriptionInput.trim() === "" || dueDateInput.trim() === "") {
      modal.current.open();
      return;
    }

    addProject({
      title: titleInput,
      description: descriptionInput,
      dueDate: dueDateInput,
    });

    // reset input fields
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to add some information for your project.</p>
        <p className="text-stone-600 mb-4">Please make sure to provide a value for each input</p>
      </Modal>
      <div className="add-new-project w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={cancelNewProject} className="hover:text-teal-300">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="px-6 py-2 rounded-md bg-teal-400/10 hover:bg-teal-400/30 hover:text-teal-300">
              Save
            </button>
          </li>
        </menu>
        <p>Create/Add NewProject Component</p>
        <div>
          <Input ref={title} label={"Title"} type="text" />
          <Input ref={description} label={"Description"} textArea />
          <Input ref={dueDate} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}

import { useState, useRef, useContext } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Modal from "./Modal";

export default function EditableField({ data, projectProp, children, ...props }) {
  let fieldContent = projectProp === "title" ? data.title : projectProp === "dueDate" ? data.dueDate : data.description;

  const { editProject } = useContext(ProjectManagerContext);
  const [fieldInput, setfieldInput] = useState(fieldContent);
  const [isEdit, setEdit] = useState(false);
  const modal = useRef();

  function handleEditProjectField() {
    setEdit((prevState) => {
      return !prevState;
    });
  }

  function handleChange(event) {
    setfieldInput(event.target.value);
  }

  function handleSaveProjectField() {
    if (fieldInput.trim() === "") {
      modal.current.open();
      return;
    }
    editProject(fieldInput, projectProp);
    setEdit((prevState) => {
      return !prevState;
    });
  }

  let ProjectField = (
    <div className="editable-field" onClick={handleEditProjectField} {...props}>
      {children}
    </div>
  );

  let inputField = <input className="input-field" type="text" value={fieldInput} onChange={handleChange} />;
  if (projectProp === "description") {
    inputField = <textarea className="input-field" type="text" value={fieldInput} onChange={handleChange} />;
  }
  if (projectProp === "dueDate") {
    inputField = <input className="input-field" type="date" value={fieldInput} onChange={handleChange} />;
  }

  if (isEdit) {
    ProjectField = (
      <div className="editable-field">
        {inputField}
        <button id={data.id} onClick={() => handleSaveProjectField(data.id)} className="save hover:text-green-500">
          Save
        </button>
      </div>
    );
  }

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">This field requires an input</p>
        <p className="text-stone-600 mb-4">Please make sure to add some text</p>
      </Modal>
      {ProjectField}
    </>
  );
}

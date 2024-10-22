import { useState, useRef, useContext, useEffect, forwardRef } from "react";
import { ProjectManagerContext } from "../store/project_manager_contex";
import Modal from "./Modal";

const EditableField = forwardRef(function EditableField({ data, type, children, ...props }, ref) {
  const { editProject } = useContext(ProjectManagerContext);
  const [fieldInput, setFieldInput] = useState(data[type]);
  const [isEdit, setEdit] = useState(false);
  const modal = useRef();
  useEffect(() => {
    setEdit(false);
  }, [data.id]);
  let regex = new RegExp(`/<[^>]*>/g, ''`);

  function handleEditProjectField() {
    setFieldInput(data[type]);
    setEdit((prevState) => {
      return !prevState;
    });
  }

  function handleChange(event) {
    const input = event.target.value;
    setFieldInput(input.replace(regex));
  }

  function handleSaveProjectField() {
    if (fieldInput.trim() === "") {
      modal.current.open();
      return;
    }
    editProject(fieldInput, type);
    setEdit((prevState) => {
      return !prevState;
    });
  }

  let inputField =
    type === "description" ? (
      <textarea ref={ref} className="input-field" type="text" value={fieldInput} onChange={handleChange} />
    ) : type === "dueDate" ? (
      <input ref={ref} className="input-field" type="date" value={fieldInput} onChange={handleChange} />
    ) : (
      <input ref={ref} className="input-field" type="text" value={fieldInput} onChange={handleChange} />
    );

  let projectDetailField = isEdit ? (
    <div className="editable-field">
      {inputField}
      <button id={data.id} onClick={() => handleSaveProjectField(data.id)} className="save hover:text-teal-300">
        Save
      </button>
    </div>
  ) : (
    <div className="editable-field" onClick={handleEditProjectField} {...props}>
      {children}
    </div>
  );

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">This field requires an input</p>
        <p className="text-stone-600 mb-4">Please make sure to add some text</p>
      </Modal>
      {projectDetailField}
    </>
  );
});

export default EditableField;

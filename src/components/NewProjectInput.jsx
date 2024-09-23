export default function NewProjectInput ({ newProject, addNewProject }) {

  const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input 
          value={newProject.title}
          onChange={(event) => 
            addNewProject('title', event.target.value)
          }
          className={classes}
          type='text' />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <input 
          value={newProject.description}
          onChange={(event) => 
            addNewProject('description', event.target.value)
          }
          className={classes} type='text' />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          New Date
        </label>
        <input 
          value={newProject.dueDate}
          onChange={(event) => 
            addNewProject('dueDate', event.target.value)
          }
          className={classes} type='date' />
      </p>
    </>
  )
}
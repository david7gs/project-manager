import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  const classes = "w-full p-1 border-b-2 rounded-md border-teal-300/20 focus:border-teal-300/50 bg-teal-400/10 text-slate-200 focus:outline-none";

  let inputField = <input ref={ref} className={classes} {...props} />;
  if (textArea) {
    inputField = <textarea ref={ref} className={classes} {...props} />;
  }

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase">{label}</label>
        {inputField}
      </p>
    </>
  );
});

export default Input;

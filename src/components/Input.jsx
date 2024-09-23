import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  const classes = "w-full p-1 border-b-2 rounded-md border-teal-300/20 focus:border-teal-300/50 bg-teal-400/10 text-slate-200 focus:outline-none focus:border-stone-600";

  let inputNode = <input ref={ref} className={classes} {...props} />;
  if (textArea) {
    console.log(`inputNode css classes changed`);
    inputNode = <textarea ref={ref} className={classes} {...props} />;
  }

  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-slate-200">{label}</label>
        {inputNode}
      </p>
    </>
  );
});

export default Input;

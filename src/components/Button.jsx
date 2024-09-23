export default function Button({ navButton, children, ...props }) {
  // let classes = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
  let classes = "px-4 py-2 text-xs md:text-base rounded-md bg-teal-400/10 hover:bg-teal-400/30 text-slate-200 hover:text-teal-300 focus-visible:text-teal-300";
  if (navButton) {
    classes = navButton;
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

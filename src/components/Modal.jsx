import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonText }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const styles = "px-4 py-2 text-xs md:text-base rounded-md bg-slate-600 hover:bg-teal-900 text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 dark:[color-scheme:dark]";

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/70 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button navButton={styles}>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

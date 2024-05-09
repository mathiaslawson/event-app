import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./style.css";
import { DialogContext } from "./DialogContext";

const Dialogue = ({ children }) => {
  const { isOpen, closeDialog } = useContext(DialogContext);

  return (
    <Dialog.Root open={isOpen} onOpenChange={closeDialog}>
      {/* <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </Dialog.Trigger> */}

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {children}

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Dialogue;

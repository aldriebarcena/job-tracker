import React from "react";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

function AddJob() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Add Job
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 text-black">
            <DialogTitle className="font-bold">Add a job</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default AddJob;

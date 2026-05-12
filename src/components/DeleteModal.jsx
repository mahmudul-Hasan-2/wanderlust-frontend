"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:9000/destinations/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    redirect("/destinations");
  }
  console.log(data);
};

const DeleteModal = ({ destination }) => {
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destination.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={() => handleDelete(destination._id)}
              >
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;

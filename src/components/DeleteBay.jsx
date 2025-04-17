import React, { useState } from "react";
import "./css/Dialog.css";

const DeleteBay = (props) => {
  const [result, setResult] = useState("");

  const handleDeleteBay = async () => {
    try {
      const response = await fetch(`https://warehouse-server-6vh1.onrender.com/api/bays/${props.bay_number}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        setResult("Bay deleted successfully");
        if (props.closeDeleteDialog) {
          props.closeDeleteDialog();
        }
        if (props.onBayDeleted) {
          props.onBayDeleted(props.bay_number);
        }
      } else {
        const errorData = await response.text();
        setResult(`Error: ${response.status} - ${errorData || 'Failed to delete bay'}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete bay number {props.bay_number}?</h3>
            <section>
              <button onClick={props.closeDeleteDialog}>No</button>
              <button onClick={handleDeleteBay}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBay;
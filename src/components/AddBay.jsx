import React, { useState } from "react";
import "./css/AddBay.css";
import "./css/Dialog.css";

const AddBay = (props) => {
    const [result, setResult] = useState("");


    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Adding bay...");

        const formData = new FormData(event.target);
        formData.set("is_full", formData.get("is_full") === "true");

        console.log(...formData);

        try {
            const response = await fetch("https://warehouse-server-6vh1.onrender.com/api/bays", {
                method: "POST",
                body: formData,
            });

            if (response.status === 200) {
                setResult("Bay added successfully");
                event.target.reset();
                props.closeAddDialog();
            } else {
                setResult("Error adding bay");
            }
        } catch (error) {
            setResult(`Error adding bay: ${error.message}`);
            console.error("Fetch error:", error);
        }
    };

    return (
        <div id="add-dialog" className={`w3-modal ${props.showAddDialog ? 'w3-show' : ''}`}>
            <div className="w3-modal-content dialog-content">
                <div className="w3-container dialog-inner-content">
                    <span id="dialog-close" className="w3-button w3-display-topright dialog-close-button" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-bay-form" onSubmit={addToServer}>
                        <h3 className="dialog-header dialog-title">Create New Bay</h3>

                        <p>
                            <label className="dialog-label" htmlFor="bay_number">Bay Number:</label>
                            <input type="text" id="bay_number" name="bay_number" required minLength="1" className="dialog-input"/>
                        </p>

                        <p>
                            <label className="dialog-label" htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company" className="dialog-input"/>
                        </p>

                        <p>
                            <label className="dialog-label" htmlFor="container_number">Container Number:</label>
                            <input type="text" id="container_number" name="container_number" className="dialog-input"/>
                        </p>

                        <p>
                            <label className="dialog-label" htmlFor="is_full">Is Full:</label>
                            <select id="is_full" name="is_full" className="dialog-select">
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </p>

                        <section className="columns">
                            <p id="img-upload" className="dialog-image-upload">
                            <label className="dialog-label" htmlFor="picture">Upload Image:</label>
                            <input type="file" id="picture" name="picture" accept="image/*" />
                            </p>
                        </section>

                        <p>
                            <button type="submit" className="dialog-button dialog-submit-button">Add Bay</button>
                        </p>
                        <p className="dialog-result">{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBay;

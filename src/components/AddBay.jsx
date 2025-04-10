import React, { useState } from "react";
import "./css/AddBay.css";
import "./css/Dialog.css";

const AddBay = (props) => {
    const [result, setResult] = useState("");

    const addToServer = async (event) => {
        event.preventDefault(); // Stops default form submission
        setResult("Adding bay...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("http://localhost:3001/api/bays", {
            "method": "POST",
            "body": formData
        });

        if (response.status === 200) {
            setResult("Bay added successfully");
            event.target.reset();
            props.closeAddDialog();
        } else {
            setResult("Error adding bay");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-bay-form" onSubmit={addToServer}>
                        <h3>Create New Bay</h3>

                        <p>
                            <label htmlFor="bay_number">Bay Number:</label>
                            <input type="text" id="bay_number" name="bay_number" required minLength="1"></input>
                        </p>

                        <p>
                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company"></input>
                        </p>

                        <p>
                            <label htmlFor="container_number">Container Number:</label>
                            <input type="text" id="container_number" name="container_number"></input>
                        </p>

                        <p>
                            <label htmlFor="is_full">Is Full:</label>
                            <select id="is_full" name="is_full">
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="contents">Contents:</label>
                            <input type="text" id="contents" name="contents"></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    <img id="img-prev" src="" alt="Preview" />
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="picture">Upload Image:</label>
                                <input type="file" id="picture" name="picture" accept="image/*" />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Add Bay</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBay;
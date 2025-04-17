import React, { useEffect, useState } from 'react';
import "./css/Dialog.css";

const EditBay = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [editedBay, setEditedBay] = useState({});

  useEffect(() => {
    setEditedBay({
      bay_number: props.bay_number,
      company: props.company,
      container_number: props.container_number,
      is_full: props.is_full,
      contents: props.contents,
    });
    console.log("EditBay: [useEffect] Initial props:", props);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBay(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
     setEditedBay(prev => ({ ...prev, [name]: value === 'true' }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData();

    formData.append('bay_number', editedBay.bay_number);
    formData.append('company', editedBay.company);
    formData.append('container_number', editedBay.container_number);
    formData.append('is_full', editedBay.is_full);
    formData.append('contents', editedBay.contents);

    const pictureInput = event.target.picture;
    if (pictureInput && pictureInput.files && pictureInput.files[0]) {
      formData.append('picture', pictureInput.files[0]);
    }

    const putUrl = `https://warehouse-server-6vh1.onrender.com/api/bays/${props.bay_number}`;
    console.log("EditBay: [handleOnSubmit] PUT request URL:", putUrl);
    console.log("EditBay: [handleOnSubmit] props.bay_number: ", props.bay_number);


    try {
      const response = await fetch(putUrl, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        setResult("Bay edited successfully");
        event.target.reset();
        const updatedBay = await response.json();
        props.onBayEdited(updatedBay);
        props.closeEditDialog();
      } else {
        const errorData = await response.text();
        setResult(`Error editing bay: ${response.status} - ${errorData || 'Failed to edit bay'}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div id="edit-dialog" className={`w3-modal ${props.showEditDialog ? 'w3-show' : ''}`}>
      <div className="w3-modal-content dialog-content">
        <div className="w3-container dialog-inner-content">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright dialog-close-button"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <h3 className="dialog-header dialog-title">Edit Bay</h3>
          <form id="edit-bay-form" onSubmit={handleOnSubmit}>
            <p>
              <label className="dialog-label" htmlFor="bay_number">Bay Number:</label>
              <input
                type="text"
                id="bay_number"
                name="bay_number"
                value={editedBay.bay_number}
                onChange={handleInputChange}
                required
                className="dialog-input"
              />
            </p>
            <p>
              <label className="dialog-label" htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={editedBay.company}
                onChange={handleInputChange}
                className="dialog-input"
              />
            </p>
            <p>
              <label className="dialog-label" htmlFor="container_number">Container Number:</label>
              <input
                type="text"
                id="container_number"
                name="container_number"
                value={editedBay.container_number}
                onChange={handleInputChange}
                className="dialog-input"
              />
            </p>
            <p>
              <label className="dialog-label" htmlFor="is_full">Is Full:</label>
              <select
                id="is_full"
                name="is_full"
                value={editedBay.is_full ? "true" : "false"}
                onChange={handleCheckboxChange}
                required
                className="dialog-select"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </p>
            <p>
              <label className="dialog-label" htmlFor="contents">Contents:</label>
              <input
                type="text"
                id="contents"
                name="contents"
                value={editedBay.contents}
                onChange={handleInputChange}
                className="dialog-input"
              />
            </p>

            <section className="dialog-image-upload">
              <div>
                <p id="img-prev-section">
                  {prevSrc ? (
                    <img id="img-prev" src={prevSrc} alt="Preview" style={{ maxWidth: '100%' }} />
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <p id="img-upload">
                <label className="dialog-label" htmlFor="picture">Upload Image:</label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  accept="image/*"
                  className="dialog-input"
                />
              </p>
            </section>
            <p>
              <button type="submit" className="dialog-button dialog-submit-button">Save Changes</button>
            </p>
            <p className="dialog-result">{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBay;
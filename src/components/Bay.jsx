import React, { useState } from 'react';
import '../pages/css/warehouse.css';
import DeleteBay from "./DeleteBay";
import EditBay from "./EditBay";

const Bay = (props) => {
    const [bay, setBay] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showBay, setShowBay] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideBay = () => {
        setShowBay(false);
    };

    const editBay = (updatedBay) => {
        setBay(updatedBay);
    };

    let sectionClass = 'section';

    if (bay.is_full) {
        sectionClass += ' rack full';
    } else {
        sectionClass += ` ${bay.contents}`;
    }


    return (
        <>
            {showBay ? (
                <div>
                    {showDeleteDialog ? (
                        <DeleteBay
                            bay_number={bay.bay_number}
                            _id={bay._id}
                            closeDeleteDialog={closeDeleteDialog}
                            onBayDeleted={hideBay}
                        />
                    ) : ("")}

                    {showEditDialog ? (
                        <EditBay
                            _id={bay._id}
                            bay_number={bay.bay_number}
                            company={bay.company}
                            container_number={bay.container_number}
                            is_full={bay.is_full}
                            contents={bay.contents}
                            closeEditDialog={closeEditDialog}
                            onBayEdited={editBay}
                        />
                    ) : ("")}

                    <div className={sectionClass}>
                        <h3>{bay.bay_number}</h3>
                        <p>
                            {bay.company && <span>Company: {bay.company}<br /></span>}
                            {bay.container_number && <span>Container: {bay.container_number}</span>}
                            {(bay.company || bay.container_number) && bay.is_full && <span> | </span>}
                            {bay.is_full && <span>Status: Full</span>}
                            {bay.contents && bay.contents !== 'rack' && bay.contents !== 'aisle' && bay.contents !== 'dock' && bay.contents !== 'office' && bay.contents !== 'open' && (
                        <>
                            {bay.company || bay.container_number || bay.is_full ? <span> | </span> : ''}
                            <span>Contents: {bay.contents}</span>
                        </>
                            )}
                        </p>
                        <section id="change-buttons">
                            <button onClick={openEditDialog}>&#9998;</button>
                            <button onClick={openDeleteDialog}>&#x2715;</button>
                        </section>
                    </div>
                </div>
            ) : ("")}
        </>
    );
};

export default Bay;
import axios from "axios";
import { useEffect, useState } from "react";
import AddBay from "./AddBay";
import Bay from "./Bay";
import './css/Bays.css';

const Bays = () => {
    const [bays, setBays] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        console.log("I'm in the close method");
        setShowAddDialog(false);
    };

    const handleBayEdited = (updatedBay) => {
        setBays(prevBays =>
            prevBays.map(b => (b._id === updatedBay._id ? updatedBay : b))
        );
    };

    const handleBayDeleted = (deletedBayId) => {
        setBays(prevBays => prevBays.filter(b => b._id !== deletedBayId));

    };


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://warehouse-server-6vh1.onrender.com/api/bays");
                setBays(response.data);
            } catch (error) {
                console.error("Error fetching bays:", error);
            }
        })();
    }, []);

    const updateBays = (newBay) => {
        console.log("updateBays called with:", newBay);
        setBays((prevBays) => [...prevBays, newBay]);
    };

    return (
        <div className="warehouse">
            {bays.map((bay) => (
                <Bay
                    key={bay._id}
                    {...bay}
                    onBayDeleted={handleBayDeleted}
                    onBayEdited={handleBayEdited}
                />
            ))}

            <button id="add-bay" onClick={openAddDialog}>+</button>

            {showAddDialog && (
                <AddBay
                    closeAddDialog={closeAddDialog}
                    updateBays={updateBays}
                    showAddDialog={showAddDialog}
                />
            )}
        </div>
    );
};

export default Bays;
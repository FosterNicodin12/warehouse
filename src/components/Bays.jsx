import axios from "axios";
import { useEffect, useState } from "react";
import AddBay from "./AddBay";
import Bay from "./Bay";
import './css/Bays.css';

const Bays = () => {
    const [bays, setBays] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

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

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        console.log("I'm in the close method");
        setShowAddDialog(false);
    };

    const updateBays = (newBay) => {
        setBays((prevBays) => [...prevBays, newBay]);
    };

    return (
        <div className="warehouse"> {}
            {bays.map((bay) => {
            console.log("Bay Data:", bay);
                return (
                <Bay
                    key={bay.bay_number}
                    bayNumber={bay.bay_number}
                    company={bay.company}
                    containerNumber={bay.container_number}
                    isFull={bay.is_full}
                    contents={bay.contents}
                />
                );
                })}

            <button id="add-bay" onClick={openAddDialog}>+</button>

            {showAddDialog ? (
                <AddBay
                    closeAddDialog={closeAddDialog}
                    updateBays={updateBays}
                />
            ) : ("")}
        </div>
    );
};

export default Bays;
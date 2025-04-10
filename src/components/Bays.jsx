import axios from "axios";
import { useEffect, useState } from "react";
import AddBay from "./AddBay";
import Bay from "./Bay";
import "./css/Bays.css";

const Bays = () => {
    const [bays, setBays] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/bays");
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
        <>
            <button id="add-bay" onClick={openAddDialog}>+</button>

            {showAddDialog ? (
                <AddBay
                    closeAddDialog={closeAddDialog}
                    updateBays={updateBays}
                />
            ) : ("")}

            <div id="bays-container" className="columns">
                {bays.map((bay) => (
                    <Bay
                        key={bay.bay_number}
                        bay_number={bay.bay_number}
                        company={bay.company}
                        picture={bay.picture}
                        container_number={bay.container_number}
                        is_full={bay.is_full}
                        contents={bay.contents}
                    />
                ))}
            </div>
        </>
    );
};

export default Bays;
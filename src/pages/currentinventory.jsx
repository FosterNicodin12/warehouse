import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bay from '../components/Bay';
import Bays from '../components/Bays';
import './css/CurrentInventory.css';

function CurrentInventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          'https://warehouse-server-6vh1.onrender.com/api/bays'
        );
        setInventoryData(response.data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <main>
      <Bays/>
      <p className="boxaround">
        Below is a live and accurate description of what our warehouse is holding. The gray represents our bays, if full they will have the container number in it.
        The red represents the aisles and the blue represents our loading docks.
      </p>
      <div className="warehouse">
        {inventoryData.map(bay => (
          <Bay
            key={bay.bay_number}
            bayNumber={bay.bay_number}
            company={bay.company}
            containerNumber={bay.container_number}
            isFull={bay.is_full}
            contents={bay.contents}
          />
        ))}
      </div>
    </main>
  );
}

export default CurrentInventory;
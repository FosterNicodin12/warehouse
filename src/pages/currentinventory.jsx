import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './css/CurrentInventory.css'; // Import your CSS file

function CurrentInventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          'https://warehouse-server-6vh1.onrender.com/api/bays' // Replace with your Render server URL
        );
        setInventoryData(response.data[0]); // Assuming your server sends back an array containing one array of bays
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
      <p className="boxaround">
        Below is a live and accurate description of what our warehouse is holding. The gray represents our bays, if full they will have the container number in it.
        The red represents the aisles and the blue represents our loading docks.
      </p>
      <div className="warehouse">
        {inventoryData.map(bay => (
          <div key={bay.bay_number} className={`section ${bay.contents}`}>
            <h3>{bay.bay_number}</h3>
            {bay.container_number && <p>ID: {bay.container_number}</p>}
            {!bay.container_number && bay.contents === 'rack' && <p>ID:</p>}
            {bay.company && <p className="company-name">Company: {bay.company}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

export default CurrentInventory;
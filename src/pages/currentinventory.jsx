import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        setInventoryData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  if (loading) {
    return <div>Loading inventory...</div>;
  }

  if (error) {
    return <div>Error loading inventory: {error.message}</div>;
  }

  return (
    <main>
      <p className="boxaround">
        Below is a live and accurate description of what our warehouse is holding. The gray represents our bays, if full they will have the container number in it.
        The red represents the aisles and the blue represents our loading docks.
      </p>
      <Bays/>
    </main>
  );
}

export default CurrentInventory;
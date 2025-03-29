import React from 'react';
import './css/Unload.css'; // Import your Unload.css file

function Unload() {
  return (
    <main>
      <section id="autopbox">
        <section>
          <img src="images/unload.png" alt="Unload and Palletize" />
        </section>
        <div id="autext" className="boxaround">
          <h2>Unload and Palletize Options</h2>
          <p>
            Our Unload and Palletize service is designed to make receiving shipments as seamless and efficient as possible. Upon arrival, our experienced team will carefully unload
            your freight, ensuring that all items are handled with care to prevent damage. We specialize in organizing and palletizing loose cargo, making it easier to store,
            transport, or distribute your goods.
            With a focus on precision and efficiency, we properly stack and secure items on high-quality pallets to maximize space and stability. Our team follows strict
            safety protocols to ensure that all loads are balanced and wrapped securely to prevent shifting during transit. Whether your shipment arrives in a container,
            trailer, or box truck, we have the necessary equipment and expertise to handle it smoothly.
            We also offer custom palletizing options, including sorting by SKU, destination, or product type, to streamline your supply chain process. Our facility is equipped
            with forklifts and material-handling equipment to expedite the process and get your goods ready for storage or shipment quickly. With years of experience in freight
            handling, our team is committed to providing a hassle-free experience that saves you time and effort. Whether you need bulk goods sorted or mixed loads organized, our
            Unload and Palletize service ensures efficiency and accuracy every step of the way.
          </p>
        </div>
      </section>
      <section id="headerratecalc" className="boxaround">
        <h2>Rate Calculator (Select all that apply)</h2>
        <section id="ratecalc">
          <div className="rate">
            <label>
              <input type="checkbox" name="longterm" /> Long Term Storage
            </label>
            <input type="text" id="longtermStorage" name="longtermStorage" placeholder="Length of storage" />
          </div>
          <div className="rate">
            <label>
              <input type="checkbox" name="unload" /> Unload and Palletize
            </label>
            <input type="text" id="unloadPieces" name="unloadPieces" placeholder="Number of pieces" />
          </div>
          <div className="rate">
            <label>
              <input type="checkbox" name="cross" /> Cross Docking
            </label>
            <input type="text" id="crossPallets" name="crossPallets" placeholder="How many pallets" />
          </div>
          <div className="rate">
            <label>
              <input type="checkbox" name="transload" /> Transload
            </label>
            <input type="text" id="transloadPallets" name="transloadPallets" placeholder="How many pallets" />
          </div>
          <div className="rate">
            <label>
              <input type="checkbox" name="local" /> Local Dray
            </label>
            <input type="text" id="localWeight" name="localWeight" placeholder="Weight of container" />
          </div>
        </section>
        <p></p>
        <p>Your estimated rate is: </p>
        <p>Note: your selected items and inputted data will be saved while on the site and carry over to all pages under the rates tab.</p>
      </section>
      <script src="script.js"></script>
    </main>
  );
}

export default Unload;
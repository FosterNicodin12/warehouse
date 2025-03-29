import React from 'react';

function CrossDock() {
  return (
    <main>
      <section id="autopbox">
        <section>
          <img id="crossimg" src="images/crossdocking.png" alt="Cross Docking" />
        </section>
        <div id="autext" className="boxaround">
          <h2>Cross Docking Options</h2>
          <p>
            Our Cross-Docking service is designed to streamline your supply chain by minimizing storage time and accelerating distribution. Instead of storing goods for extended
            periods, we quickly transfer shipments from inbound to outbound transportation, reducing handling costs and improving efficiency. This process helps businesses meet
            tight delivery schedules while maintaining product integrity.
            Our experienced team carefully unloads incoming freight, inspects it for quality, and reloads it onto the next mode of transport with precision. We offer sorting,
            palletizing, and repackaging services to ensure shipments are organized and ready for quick dispatch. Whether you need to consolidate multiple shipments or break down
            large loads into smaller deliveries, we tailor our cross-docking solutions to meet your specific needs.
            With over 2,000 square feet of warehouse space and specialized equipment, we can handle a wide range of freight, from palletized goods to bulk shipments. Our facility
            is equipped with forklifts and advanced tracking systems to ensure accuracy and efficiency in every transfer. By reducing storage time and unnecessary handling, our
            Cross-Docking service helps you save time, lower costs, and keep your supply chain running smoothly. Let us help you move your freight faster and more efficiently.
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

export default CrossDock;
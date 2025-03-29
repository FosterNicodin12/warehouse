import React from 'react';
import './css/Transload.css'; // Import your Transload.css file

function Transload() {
  return (
    <main>
      <section id="autopbox">
        <section>
          <img id="transloadimg" src="images/transload.png" alt="Transload" />
        </section>
        <div id="autext" className="boxaround">
          <h2>Transload Options</h2>
          <p>
            Our Transload service provides a fast and efficient solution for transferring goods between different transportation modes. Whether your freight is arriving by truck,
            rail, or container, our experienced team ensures a smooth and seamless transfer process. We carefully unload shipments, inspect for damages, and reload them onto the
            appropriate outbound transportation while maintaining the highest safety standards.
            With over 2,000 square feet of warehouse space and specialized equipment, we can handle a wide range of freight, including pallets, oversized cargo, and bulk shipments.
            Our team ensures that all loads are properly secured and balanced to prevent shifting during transit. We also offer shrink-wrapping, re-stacking, and load optimization
            services to maximize efficiency and reduce handling costs.
            For businesses managing tight deadlines, our Transload service helps speed up distribution by minimizing storage time and getting goods back on the road quickly. Whether
            you need cross-docking, short-term storage, or customized repackaging, we tailor our services to fit your specific supply chain needs. With years of experience in freight
            logistics, we prioritize speed, accuracy, and safety to ensure a hassle-free transfer process. Let us help streamline your transportation operations and keep your shipments
            moving without delay.
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

export default Transload;
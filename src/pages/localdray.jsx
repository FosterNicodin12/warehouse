import React from 'react';

function LocalDray() {
  return (
    <main>
      <section id="autopbox">
        <section>
          <img id="localimg" src="images/local.jpg" alt="Local Dray" />
        </section>
        <div id="autext" className="boxaround">
          <h2>Local Dray Options</h2>
          <p>
            Our Local Drayage service provides reliable and efficient short-haul transportation for shipping containers and freight within the region. Whether you need to move cargo
            between ports, rail yards, or distribution centers, our experienced drivers ensure timely and secure deliveries. We specialize in handling both full and empty container
            moves, helping businesses streamline their logistics operations.
            With a fleet of well-maintained trucks and chassis, we can accommodate a variety of container sizes, including 20-foot, 40-foot, and high-cube units. Our team prioritizes
            punctuality and adheres to all safety and regulatory requirements to ensure smooth transit. We also offer just-in-time delivery services, helping businesses meet strict
            deadlines without unnecessary storage fees.
            For added convenience, we provide real-time tracking and communication so you can monitor your shipment’s progress. Whether you need drayage for import/export operations,
            intermodal transfers, or last-mile deliveries, we tailor our services to meet your specific needs. With a commitment to efficiency and customer satisfaction, our Local
            Drayage service ensures your freight gets where it needs to go—on time and without hassle. Our team understands the importance of quick turnarounds, reducing dwell
            time to keep your supply chain moving smoothly. We work closely with ports, rail terminals, and distribution centers to ensure seamless coordination and minimal delays.
            Our drivers are highly experienced in navigating local routes, optimizing delivery times, and avoiding congestion whenever possible. With our Local Drayage service, you
            can trust that your cargo will be handled with care and delivered efficiently every time.
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

export default LocalDray;
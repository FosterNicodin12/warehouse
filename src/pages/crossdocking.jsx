import React from 'react';
import RateCalculator from '../components/RateCalculator';

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
      <RateCalculator/>
      <script src="script.js"></script>
    </main>
  );
}

export default CrossDock;
import React from 'react';
import RateCalculator from '../components/RateCalculator';
import './css/Transload.css';

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
      <RateCalculator/>
      <script src="script.js"></script>
    </main>
  );
}

export default Transload;
import React from 'react';
import './css/CurrentInventory.css';

function CurrentInventory() {
  return (
    <main>
      <p className="boxaround">
        Below is a live and accurate description of what our warehouse is holding. The gray represents our bays, if full they will have the container number in it.
        The red represents the aisles and the blue represents our loading docks.
      </p>
      <div className="warehouse">
        <div className="open section">Pallets</div>
        <div className="rack section">
          <p>A1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>B1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>C1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>D1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>E1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>F1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>G1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>H1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>I1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>J1<br />ID:</p>
        </div>
        <div className="rack section">
          <p>K1<br />ID:</p>
        </div>

        <div className="open section">Open</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>

        <div className="dock section">Dock 3</div>
        <div className="aisle section">Aisle</div>
        <div className="rack section">
          <p>B2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>C2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>D2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>E2<br />ID:</p>
        </div>
        <div className="rack section">
          <p>F2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>G2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>H2<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>I2<br />ID:</p>
        </div>
        <div className="rack section">
          <p>J2<br />ID:</p>
        </div>
        <div className="rack section">
          <p>K2<br />ID:</p>
        </div>

        <div className="dock section">Dock 3</div>
        <div className="aisle section">Aisle</div>
        <div className="rack section">
          <p>B3<br />ID:</p>
        </div>
        <div className="rack section">
          <p>C3<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>D3<br />ID:</p>
          3
        </div>
        <div className="rack section">
          <p>E3<br />ID:</p>
        </div>
        <div className="rack section">
          <p>F3<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>G3<br />ID:</p>
        </div>
        <div className="rack section">
          <p>H3<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>I3<br />ID:</p>
        </div>
        <div className="rack section">
          <p>J3<br />ID:</p>
        </div>
        <div className="rack section">
          <p>K3<br />ID: TEST-1342-9</p>
        </div>

        <div className="dock section">Dock 1</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>
        <div className="aisle section">Aisle</div>

        <div className="open section">Open</div>
        <div className="open section">Open</div>
        <div className="open section">Open</div>
        <div className="open section">Open</div>
        <div className="open section">Open</div>
        <div className="office section">Office</div>
        <div className="office section">Office</div>
        <div className="rack section">
          <p>G4<br />ID: MTSU-4124-1</p>
        </div>
        <div className="rack section">
          <p>H4<br />ID: MTSU-8704-6</p>
        </div>
        <div className="rack section">
          <p>I4<br />ID: XMRU-1234-6</p>
        </div>
        <div className="rack section">
          <p>J4<br />ID: TEST-1342-9</p>
        </div>
        <div className="rack section">
          <p>K4<br />ID:</p>
        </div>
      </div>
      <script src="script.js"></script>
    </main>
  );
}

export default CurrentInventory;
import React from 'react';
import './css/RateCalculator.css'; // Assuming you have a CSS file for this

function RateCalculator() {
  return (
    <section id="headerratecalc" className="boxaround">
      <h2>Rate Calculator (Select all that apply)</h2>
      <section id="ratecalc">
        <div className="rate">
          <label>
            <input type="checkbox" name="longterm" /> Long Term Storage
          </label>
          <input
            type="text"
            id="longtermStorage"
            name="longtermStorage"
            placeholder="Length of storage"
          />
        </div>
        <div className="rate">
          <label>
            <input type="checkbox" name="unload" /> Unload and Palletize
          </label>
          <input
            type="text"
            id="unloadPieces"
            name="unloadPieces"
            placeholder="Number of pieces"
          />
        </div>
        <div className="rate">
          <label>
            <input type="checkbox" name="cross" /> Cross Docking
          </label>
          <input
            type="text"
            id="crossPallets"
            name="crossPallets"
            placeholder="How many pallets"
          />
        </div>
        <div className="rate">
          <label>
            <input type="checkbox" name="transload" /> Transload
          </label>
          <input
            type="text"
            id="transloadPallets"
            name="transloadPallets"
            placeholder="How many pallets"
          />
        </div>
        <div className="rate">
          <label>
            <input type="checkbox" name="local" /> Local Dray
          </label>
          <input
            type="text"
            id="localWeight"
            name="localWeight"
            placeholder="Weight of container"
          />
        </div>
      </section>
      <p></p>
      <p>Your estimated rate is: </p>
      <p>Note: your selected items and inputted data will be saved while on the site and carry over to all pages under the rates tab.</p>
    </section>
  );
}

export default RateCalculator;
import React from 'react';
import './css/Bay.css';

const Bay = ({ bayNumber, company, containerNumber, isFull, contents }) => {
  return (
    <div className={`bay section ${contents}`}>
      <h3>{bayNumber}</h3>
      {containerNumber && <p>ID: {containerNumber}</p>}
      {!containerNumber && contents === 'rack' && <p>ID:</p>}
      {company && <p>Company: {company}</p>}
      {isFull && <p>Status: Full</p>}
    </div>
  );
};

export default Bay;
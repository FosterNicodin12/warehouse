import React from 'react';
import '../pages/css/warehouse.css';

function Bay({ bayNumber, company, containerNumber, isFull, contents }) {
    let sectionClass = 'section';

    if (isFull) {
        sectionClass += ' rack full';
    } else {
        sectionClass += ` ${contents}`;
    }

    return (
        <div className={sectionClass}>
            <h3>{bayNumber}</h3>
            {company && <p>Company: {company}</p>}
            {containerNumber && <p>Container: {containerNumber}</p>}
            {isFull && <p>Status: Full</p>}
            {contents && !['rack', 'aisle', 'dock', 'office', 'open'].includes(contents) && <p>Contents: {contents}</p>}
        </div>
    );
}

export default Bay;
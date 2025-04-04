import React from 'react';
import './css/Employee.css';

function Employee({ name, description, imageUrl }) {
  return (
    <section className="employee boxaround">
      <img className="employeeimg" src={imageUrl} alt={name} />
      <div className="employeediv">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Employee;
import React from "react";

const Formulario = () => {
  return (
    <div>
      <h4>Create Appointment</h4>
      <label htmlFor="pet">Pet Name:</label>
      <input
        type="text"
        name="pet"
        id="pet"
        placeholder="Pet Name..."
        className="u-full-width"
      />
      <label htmlFor="owner"> Owner's Name:</label>
      <input
        type="text"
        name="owner"
        id="owner"
        placeholder="Owner's Name..."
        className="u-full-width"
      />
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" id="date" className="u-full-width" />
      <label htmlFor="hour">Hour:</label>
      <input type="time" name="hour" id="hour" className="u-full-width" />
      <label htmlFor="symptom">Symptom:</label>
      <input type="text" name="symptom" id="symptom" className="u-full-width" />
      <button className="u-full-width button-primary">Add Appointment</button>
    </div>
  );
};

export default Formulario;

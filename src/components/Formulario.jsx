import React, { useState } from "react";

const Formulario = () => {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptom: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, hour, symptom } = appointment;

  const hadlerSubmit = (e) => {
    e.preventDefault();
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptom.trim() === ""
    ) {
      setError(true);

      return;
    }
    console.log("sending...");
  };
  return (
    <div>
      <h4>Create Appointment</h4>

      {error && <p className="alerta-error">All fields are required</p>}

      <form onSubmit={hadlerSubmit}>
        <label htmlFor="pet">Pet Name:</label>
        <input
          type="text"
          name="pet"
          id="pet"
          placeholder="Pet Name..."
          className="u-full-width"
          onChange={handleChange}
          value={pet}
        />
        <label htmlFor="owner"> Owner's Name:</label>
        <input
          type="text"
          name="owner"
          id="owner"
          placeholder="Owner's Name..."
          className="u-full-width"
          onChange={handleChange}
          value={owner}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label htmlFor="hour">Hour:</label>
        <input
          type="time"
          name="hour"
          id="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />
        <label htmlFor="symptom">Symptom:</label>
        <input
          type="text"
          name="symptom"
          id="symptom"
          className="u-full-width"
          onChange={handleChange}
          value={symptom}
        />
        <button className="u-full-width button-primary">Add Appointment</button>
      </form>
    </div>
  );
};

export default Formulario;

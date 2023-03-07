import React, { useState } from "react";

const Form = ({addReservation}) => {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [number, setNumber] = useState("")
  

  let createReservation = (event) => {
    event.preventDefault();
    let reservation = {
      id: Date.now(),
      name: name,
      date: date,
      time: time,
      number: Number(number),
    };
    addReservation(reservation);
  };

 
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <input
          type="number"
          placeholder="Number of guests"
          name="guests"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button
          className="submit"
          onClick={(event) => createReservation(event)}
        >
          Make Reservation
        </button>
      </form>
    );
  }


export default Form;

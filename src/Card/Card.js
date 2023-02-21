import React from "react";

const Card = ({ name, date, time, guests }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${guests}`}</p>
      <button>Cancel</button>
    </div>
  );
};

export default Card;

import React from "react";
import Card from '../Card/Card.js'

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map((res) => {
    return (
      <Card
        name={res.name}
        date={res.date}
        time={res.time}
        guests={res.number}
        id={res.id}
        key={res.key}
      />
    )
  })

  return (
    <div className="container">
      {reservationCards}
    </div>
  )
};

export default Reservations;

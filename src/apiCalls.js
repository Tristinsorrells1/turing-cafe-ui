const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then((response) =>  response.json())
  .catch((error) => {
    console.log(error.message);
    throw new Error(error.message);
  })
}

export default fetchReservations
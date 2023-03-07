const fetchReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then((response) => {
      if (response.ok) {
        console.log("Successful GET", response);
        return response.json();
      } else if (!response.ok) {
        console.log("Response Not Ok", response);
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

export default fetchReservations
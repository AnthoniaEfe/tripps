import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

//styles
import "./TripList.css";

export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, isPending, error } = useFetch(url);

  console.log(trips);

  return (
    <div className="trip-list">
      <h1>TRIP LIST</h1>

      {isPending && <div className="is-pending">Loading Trips...</div>}
      {error && <div className="error">{error}</div>}

      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h2>{trip.title}</h2>
              <p>Price: {trip.price}</p>
              <p>Location: {trip.loc}</p>
            </li>
          ))}
      </ul>
      <div className="select-trip">
        <button
          className="select-trip"
          onClick={() => setUrl("http://localhost:3000/trips?loc=africa")}
        >
          African Trips
        </button>

        <button
          className="select-trip"
          onClick={() => setUrl("http://localhost:3000/trips")}
        >
          All Trips
        </button>
      </div>
    </div>
  );

  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setTrips(json));
  // }, [url]);
}

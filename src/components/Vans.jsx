import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []); // Avoiding our effect from running everytime our page updates.
  // We only want it to run once, when our component mounts.

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-title">
      <img src={van.imageUrl} alt="Van image" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

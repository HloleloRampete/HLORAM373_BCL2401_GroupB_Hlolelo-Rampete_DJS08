import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []); // Avoiding our effect from running everytime our page updates.
  // We only want it to run once, when our component mounts.

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
        <img src={van.imageUrl} alt="Van image" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filter"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

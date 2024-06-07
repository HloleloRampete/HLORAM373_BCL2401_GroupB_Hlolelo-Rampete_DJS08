import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation()
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    // fetch data from API using params.id
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans)); // localized state
  }, [params.id]); // Rerunning the useEffect for each time data is fetched

  const search = location.state && location.state.search || ""

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="Van image" />
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

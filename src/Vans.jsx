import React from "react";

export default function Vans() {
    
  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []); // Avoiding our effect from running everytime our page updates.
  
  return <h1></h1>;
}

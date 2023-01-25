import { React, useState, useEffect } from "react";

export default function Information({ mode, line }) {
  const [routes, setRoutes] = useState("");

  useEffect(() => {
    const getRoutes = async () => {
      const res = await fetch(`https://api.tfl.gov.uk/Line/${line}/Route`);
      const json = await res.json();
      setRoutes(json.routeSections[0]);
      console.log(json.routeSections[0]);
    };
    getRoutes();
  }, []);

  return (
    <div>
      <p>
        {mode}: {line}
      </p>
      <div>
        <p>
          <b>START OF LINE</b>
        </p>
        <h5>{routes.originationName}</h5>
        <br />
        <p>
          <b>END OF LINE</b>
        </p>
        <h5>{routes.destinationName}</h5>
      </div>
    </div>
  );
}

import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsLists = actors.map((actors,index) => (
    <div key={index}>
    {actors.name}
    <ul>
      {actors.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
  ));

  return <div>
     <h1>Actors Page</h1>
      {actorsLists}
  </div>;
}

export default Actors;

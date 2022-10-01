import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsLists = directors.map((directors,index) => (
    <div key={index}>
    {directors.name}
    <ul>
      {directors.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
  ));

  return <div>
    <h1>Directors page</h1>
    {directorsLists}
  </div>;
}

export default Directors;

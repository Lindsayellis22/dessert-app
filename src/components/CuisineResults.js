import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function CuisineResults(props) {
  if (props.loading) {return <h1>Loading...</h1>};
 
  return (
    <section className="container">
      {props.desserts.map((dessert) => (
        <Link to={`recipes/${dessert.id}`} key={dessert.id}>
          <div className="card-image">
            <img src={dessert.image} alt={dessert.title} />
          </div>
        </Link>
      ))}
    </section>
  );
}         

export default CuisineResults;
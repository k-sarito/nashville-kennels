import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={'/images/dog.svg'} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <p>Admitted: {animal?.date}</p>
          <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
          </Link>
          <button type="button" onClick={() => handleDeleteAnimal(animal)}>Discharge</button>
          <Link to={`/animals/${animal.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  };
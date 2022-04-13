import React, { useState, useEffect } from 'react';
import { deleteAnimal, getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetails.css';
import { useParams, useNavigate } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true)

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
      setIsLoading(true);
      deleteAnimal(animalId).then(() => 
        navigate("/animals")
      );
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button type='button' disabled={isLoading} onClick={handleDelete}>
          Discharge
      </button>
    </section>
  );
}


import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal, getAnimalByLocation, updateAnimal } from '../../modules/AnimalManager';
import { getAllLocations } from '../../modules/LocationManager';
import { useNavigate } from 'react-router-dom';
import "./Animal.css"

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  const [locations, setLocations] = useState([])

  const navigate = useNavigate();

  const handleDeleteAnimal = animal => {
        animal.isDischarged = true

        updateAnimal(animal)
        .then(getAllAnimals().then(animals => {setAnimals(animals)}));
    };
  
  const sortAnimalByLocation = event => {
    console.log(event)
    let Id = parseInt(event.target.value)
      getAnimalByLocation(Id).then(sortedAnimals => {
        setAnimals(sortedAnimals)
      })
  }

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
		//load location data and setState
		getAllLocations()
			.then(locations => setLocations(locations))
	}, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    //add this button above your display of animal cards
    <>
      <fieldset>
				<div className="form-group">
					<label htmlFor="location">Sort by Location: </label>
					<select value={animals.locationId} name="locationId" id="locationId" onChange={sortAnimalByLocation} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/animals/create")}}>
            Admit Animal
        </button>
      </section>
      <div className="container-cards" >
        {animals.map(animal => <AnimalCard animal={animal} key={animal.id} handleDeleteAnimal={handleDeleteAnimal}/>)}
    </div>
    </>
  );
};

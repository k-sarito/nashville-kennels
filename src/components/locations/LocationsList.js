import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './LocationsCard';
import { getAllLocations, getLocationById, deleteLocations } from '../../modules/LocationManager';

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const handleDeleteLocation = id => {
      deleteLocations(id)
      .then(() => getAllLocations().then(setLocations));
  };

  const getLocations = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllLocations().then(result => {
      setLocations(result)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
      <div className="container-cards" >
        {locations.map(location => <LocationCard location={location} key={location.id} handleDeleteLocation={handleDeleteLocation}/>)}
    </div>
  );
};

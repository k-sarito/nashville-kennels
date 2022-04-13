import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../modules/AnimalManager"
import { PropsAndState } from "./PropsAndState";



export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);
  
    const refreshSpotlightAnimal = () => {
      getRandomId().then(setSpotlightId);
    };
  
    useEffect(() => {
      refreshSpotlightAnimal();
    }, []);
    return (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Cory"} />
        <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
    )
}
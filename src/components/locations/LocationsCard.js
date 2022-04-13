import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom";

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location" id={`location__${location.id}`}>
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Down</button>
    </section>
)
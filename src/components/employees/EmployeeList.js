import React, { useState, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllLocations } from "../../modules/LocationManager";
import { getAllEmployees, getEmployeeById, deleteEmployees, getEmployeeByLocation } from "../../modules/EmployeeManager";
import "./Employee.css"
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => { 

    const [employees, setEmployees] = useState([]);
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();

    const handleDeleteEmployee = id => {
        deleteEmployees(id)
        .then(() => getAllEmployees().then(setEmployees))
    }

    const getEmployees = () => {
        return getAllEmployees().then(result => {
            setEmployees(result)
        });
    };

    const sortEmployeesByLocation = event => {
        let Id = parseInt(event.target.value)
            getEmployeeByLocation(Id).then(sortedEmployees => {
                setEmployees(sortedEmployees)
            })
    }

    useEffect(() => {
        getEmployees();
    }, []);
    useEffect(() => {
        getAllLocations()
            .then(locations => setLocations(locations))
    }, []);


    return (
        <>
            <fieldset>
				<div className="form-group">
					<label htmlFor="location">Sort by Location: </label>
					<select value={employees.locationId} name="locationId" id="locationId" onChange={sortEmployeesByLocation} className="form-control" >
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
                    onClick={() => {navigate("/employees/create")}}>
                    Add Employee

                </button>
            </section>
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard employee={employee} key={employee.id} handleDeleteEmployee={handleDeleteEmployee}/>)}
            </div>
        </>
    )
}
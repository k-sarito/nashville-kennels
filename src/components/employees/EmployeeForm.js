import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../modules/EmployeeManager";
import './EmployeeForm.css'
import { getAllEmployees } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager"; 

export const EmployeeForm = () => {

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    });

    const [isLoading, setIsLoading] = useState(false)

    const [locations, setLocation] = useState([])

    const navigate = useNavigate();


    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }


        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getAllLocations()
            .then(locations => setLocation(locations))
    }, [])


    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true)
            addEmployee(employee)
                .then(() => navigate("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to Location:</label>
                    <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0">Select a Location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary" disabled={isLoading}
                onClick={handleClickSaveEmployee}>
                Save Employee        
            </button>
        </form>
    )
}
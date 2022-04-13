import React, { useState, useEffect} from "react";
import { getEmployeeById, deleteEmployees } from "../../modules/EmployeeManager";
import './EmployeeDetails.css';
import { useParams, useNavigate } from "react-router-dom";

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: ""});
    const [isLoading, setIsLoading] = useState(true)

    const {employeeId} = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployees(employeeId).then(() => 
            navigate("/employees")
        );
    };

    useEffect(() => {
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee(employee);
                setIsLoading(false)
            });
    }, [employeeId]);

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}, {employee.location?.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Terminate
            </button>
        </section>
    )
}
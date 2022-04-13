// import React, { useState, useEffect } from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import { getEmployeeById, updateEmployee } from "../../modules/EmployeeManager";
// import './EmployeeForm.css'

// export const EmpEditForm = () => {
//     const [employee, setEmployee] = useState({name: "", location: ""});
//     const [isLoading, setIsLoading] = useState(false);

//     const {employeeId} = useParams();
//     const navigate = useNavigate();

//     const handleFieldChange = evt => {
//         const stateToChange = {...employee};
//         stateToChange[evt.target.id] = evt.target.value;
//         setEmployee(stateToChange);
//     };

//     const updateExistingEmployee = evt => {
//         evt.preventDefault()
//         setIsLoading(true);

//         const editedEmployee = {
//             id: employeeId, 
//             name: employee.name,
//             location: employee.locationId
//         };

//         updateEmployee(editedEmployee)
//             .then(() => navigate("/employees")
//             )
//     }

//     useEffect(() => {
//         getEmployeeById(employeeId)
//             .then(employee => {
//                 setEmployee(employee);
//                 setIsLoading(false);
//             });
//     }, []);

//     return (
//         <>
//             <form>
//                 <fieldset>

//                 </fieldset>
//             </form>
//         </>
//     )
// }
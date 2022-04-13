import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList.js'
import { AnimalDetail } from "./animal/AnimalDetails"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeDetail } from "./employees/EmployeeDetails"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerList } from "./customers/CustomerList"
import { LocationList } from "./locations/LocationsList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated}) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }



    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList/>
                    </PrivateRoute>
                } />
                <Route exact path="/animals/:animalId" element={
                    <PrivateRoute>
                        <AnimalDetail />
                    </PrivateRoute>
                } />
                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>
                } />
                
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route path="/customers" element={<CustomerList/>}/>
                <Route exact path="/employees" element={<EmployeeList/>}/>
                <Route path="/employees/:employeeId" element={<EmployeeDetail/>}/>
                <Route path="/employees/create" element={<EmployeeForm/>}/>
                <Route path="/locations" element={<LocationList/>}/>
                <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}
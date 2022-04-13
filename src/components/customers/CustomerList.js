import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, getCustomerById, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
    //*customers is now an empty array, and setCustomers is a function that can do something with that empty array
    const [customers, setCustomers] = useState([]);

    //*functionality for the remove button
    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };

    //*function uses the fetch call, slaps them into the array
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    //*runs this function ONCE because the array is empty
    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard customer={customer} key={customer.id} handleDeleteCustomer={handleDeleteCustomer}/>)}
        </div>
    );
};
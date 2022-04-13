import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer, handleDeleteCustomer}) => {
    return (
        <div className="card">
            <div className="card-content">
                <section className="customer" id={`customer__${customer.id}`}>
                <h3>Name: <span className="card__customername">
                    {customer.name}
                    </span></h3>
                <div className="Customer__address">Address: {customer.address}</div>
                <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>
                </section>
            </div>
        </div>
    )
}
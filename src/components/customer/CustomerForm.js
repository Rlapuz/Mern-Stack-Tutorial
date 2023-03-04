import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';

export const CustomerForm = ({ getCustomer }) => {

    const [customerName, setCustomerName] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const saveCustomer = async (e) => {
        e.preventDefault()

        try {
            const customerData = {
                name: customerName
            }
            await axios.post("http://localhost:5000/customer/", customerData)
            getCustomer()
            setCustomerName("")
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000)
        } catch (err) {
            console.log(err)
        }
    }




    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={saveCustomer}>
                <Form.Group controlId="formCustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}

                    />
                </Form.Group>
                <Button variant="success" type="submit" className='mt-3 mb-3'>
                    Add
                </Button>
                {showAlert &&
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        Customer name added successfully!
                    </Alert>
                }
            </Form>
        </div>
    )
}

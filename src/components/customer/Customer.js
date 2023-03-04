import { useEffect, useState } from "react"
import { CustomerForm } from "./CustomerForm"
import { CustomerList } from "./CustomerList"
import axios from "axios"
import { Alert } from "react-bootstrap"

export const Customer = () => {

    const [customer, setCustomer] = useState([])
    const [showAlert, setShowAlert] = useState(false)


    const getCustomer = async () => {
        const customerRes = await axios.get("http://localhost:5000/customer/")
        setCustomer(customerRes.data)
    }

    const removeCustomer = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/customer/${id}`)
            getCustomer()
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCustomer()
    }, [])

    return (
        <div>
            <CustomerForm getCustomer={getCustomer} />
            <CustomerList customer={customer} removeCustomer={removeCustomer} />

            {showAlert &&
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Customer removed successfully!
                </Alert>
            }
        </div>
    )
}

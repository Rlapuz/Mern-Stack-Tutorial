import { Table } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export const CustomerList = ({ customer, removeCustomer }) => {

    const renderCustomer = () => {
        return customer.map((customer, i) => {
            return (
                <tr key={i}>
                    <td>{customer.name}</td>
                    <td>
                        <FaTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => removeCustomer(customer._id)}
                        />
                    </td>
                </tr>
            )
        })
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCustomer()}
                </tbody>
            </Table>
        </div>
    )
}

import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory()

    const register = async (e) => {
        e.preventDefault();

        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            }



            await axios.post("https://mern-stack-tutorial.vercel.app/auth/", registerData)
            getLoggedIn()
            history.push("/")
            window.alert("Registration successful!")

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }} class="font-monospace">REGISTER</h1>
            <div className="d-flex justify-content-center" >
                <Form onSubmit={register}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            style={{ width: '300px' }}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            style={{ width: '300px' }}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            style={{ width: '300px' }}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            value={passwordVerify}
                        />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

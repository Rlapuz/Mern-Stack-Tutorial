import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { useHistory } from "react-router-dom"
import { Form, Button, Alert } from 'react-bootstrap';

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loginSuccess, setLoginSuccess] = useState(false)


    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory()


    const login = async (e) => {
        e.preventDefault();



        try {
            const loginData = {
                email,
                password,
            }

            await axios.post("http://localhost:5000/auth/login", loginData)
            await getLoggedIn()
            setLoginSuccess(true);
            setTimeout(() => {
                setLoginSuccess(false);
            }, 3000);
            history.push("/customer")

        } catch (err) {
            if (err.response.status === 401) {
                setErrorMessage("Wrong Email or Password")
            }
        }
    }


    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={login}>
                {loginSuccess && <Alert variant="success">Login Successful!</Alert>}
                <h1 class="font-monospace">LOGIN</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        style={{ width: '300px' }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        style={{ width: '300px' }}
                    />
                </Form.Group>

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import { LogOutBtn } from "../auth/LogOutBtn"
import { Navbar, Nav } from "react-bootstrap"


export const NavigationBar = () => {

    const { loggedIn } = useContext(AuthContext)

    return (
        <Navbar bg="success" variant="light" expand="lg">
            <Navbar.Brand as={Link} to="/" style={{ marginLeft: '20px' }}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {loggedIn === false && (
                        <>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </>
                    )}
                    {loggedIn === true && (
                        <>
                            <Nav.Link as={Link} to="/customer">Customers</Nav.Link>
                            <LogOutBtn />
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

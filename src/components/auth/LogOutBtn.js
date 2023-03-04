import axios from "axios"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import { Button } from "react-bootstrap"


export const LogOutBtn = () => {

    const { getLoggedIn } = useContext(AuthContext)

    const history = useHistory()

    const logOut = async () => {
        await axios.get("http://localhost:5000/auth/logout")
        await getLoggedIn()
        history.push("/")


    }

    return (
        <Button variant="danger" className="position-absolute top-0 end-0 mt-2 me-3" onClick={logOut}>Log out</Button>
    )
}

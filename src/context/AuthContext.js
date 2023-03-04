import { createContext, useEffect, useState } from "react"
import axios from "axios"

const AuthContext = createContext()

export const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(undefined)

    const getLoggedIn = async () => {
        const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn")
        setLoggedIn(loggedInRes.data)
    }

    useEffect(() => {
        getLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext;

import { createContext, useEffect, useState } from "react"
import axios from "axios"

const AuthContext = createContext()

export const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(undefined)

    const getLoggedIn = async () => {
        const loggedInRes = await axios.get("https://mern-stack-tutorial.vercel.app/loggedIn")
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

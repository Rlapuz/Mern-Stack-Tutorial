
import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavigationBar } from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import { Customer } from "../src/components/customer/Customer"
import { Home } from "../src/components/auth/Home";

export const Router = () => {

    const { loggedIn } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {loggedIn === false && (
                    <>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/customer">
                            <Customer />
                        </Route>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
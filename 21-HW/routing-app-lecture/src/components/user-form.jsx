import { useContext } from "react"
import { LoginForm } from "./login-form";
import { Store } from "../App";
import { useHistory } from "react-router";

export const UserForm = () => {
    const {state: {
        isAuthenticated,
        user
    }, actions: {
        logoutUser
    }} = useContext(Store);

    const history = useHistory()

    const handleClick = () => {
        try {
            logoutUser()
            history.push("/")
        } catch (error) {
            alert('Smth is wrong')
        }
    }

    if (isAuthenticated) {
        return (
            <div className="user">
                <p>Hello</p>
                <p>{user.name}</p>
                <p>{user.surname}</p>
                <button onClick={handleClick}>Log Out</button>
            </div>
        );
    }

    return <LoginForm />
}
import {FC} from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { Paths } from "../../types/type";
import { LoginFormWrapper } from "../LoginForm/LoginForm.style";
import { Link } from "react-router-dom";

export const LoginPage: FC = () => {
    return (
        <LoginFormWrapper>
            <h3>Login</h3>
            <LoginForm typeForm={Paths.LoginPage}/>
            <p>Not registered?
                <Link to={Paths.RegistrationPage}> Click to register.</Link>
            </p>
        </LoginFormWrapper>
    )
}
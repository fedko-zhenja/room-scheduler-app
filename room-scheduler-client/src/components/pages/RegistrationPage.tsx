import {FC} from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Paths } from "../../types/type";
import { LoginFormWrapper } from "../LoginForm/LoginForm.style";

export const RegistrationPage: FC = () => {
    return (
        <LoginFormWrapper>
            <h3>Registration</h3>
            <LoginForm typeForm={Paths.RegistrationPage}/>
        </LoginFormWrapper>
    )
}
import {FC, useContext, useState} from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import { LoginFormContent } from "./LoginForm.style";
import { Paths, LoginFormProps } from "../../types/type";
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useRedirect } from "../../helpers/redirect";

export const LoginForm: FC<LoginFormProps> = observer(
    ({ typeForm }) => {
        const [email, setEmail] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const {store} = useContext(Context);
    
        const redirect = useRedirect();
    
        const handleRedirect = () => {
            redirect(Paths.HomePage);
        };
        
        return (
            <LoginFormContent>
                <Form>
                    <Form.Item>
                        <Input 
                                type="text"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                    </Form.Item>
    
    
                    <Form.Item>
                        <Input.Password 
                                    type="text"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
    
                    <Button onClick={() => {typeForm === Paths.LoginPage ? store.login(email, password, handleRedirect) : store.registration(email, password, handleRedirect)}}
                        type="primary" block>
    
                            {typeForm === Paths.LoginPage ? 'Login' : 'Registration'}
                    </Button>
                </Form>
            </LoginFormContent>
        )
    }
);

// export default observer(LoginForm);
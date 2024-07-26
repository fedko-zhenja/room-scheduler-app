import {FC, useContext, useState} from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import { LoginFormContent } from "./LoginForm.style";
import { Paths, LoginFormProps } from "../../types/type";
import { Form, Input, Button, Space } from 'antd';

const LoginForm: FC<LoginFormProps> = ({ typeForm }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {store} = useContext(Context);

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
                    <Space direction="horizontal">
                        <Input.Password 
                                    type="text"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Space>
                </Form.Item>

                <Button onClick={() => {typeForm === Paths.LoginPage ? store.login(email, password) : store.registration(email, password)}}
                    type="primary" block>

                        {typeForm === Paths.LoginPage ? 'Login' : 'Registration'}
                </Button>
            </Form>
        </LoginFormContent>
    )
}

export default observer(LoginForm);
import {FC, useContext, useState} from "react";
import { Context } from "../../index";
import { observer } from 'mobx-react-lite';
import { LoginFormWrapper } from "./LoginForm.style";

import { Form, Input, Button } from 'antd';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);

    return (
        <LoginFormWrapper>
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
                    <Input 
                            type="text"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                </Form.Item>

                <Button onClick={() => store.login(email, password)}
                     type="primary">
                        
                    Login
                </Button>

                <Button onClick={() => store.registration(email, password)}
                     type="primary"
                     style={{ marginLeft: '10px' }}>

                    Registration
                </Button>
            </Form>
        </LoginFormWrapper>
    )
}

export default observer(LoginForm);
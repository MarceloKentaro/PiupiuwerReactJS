import React, {useState, useCallback} from 'react';
import {useAuth} from '../../hooks/useAuth';
import imgLogo from '../../assets/images/logo.svg';
import Input from '../../components/FormInput';
import Image from '../../components/Image';

import {Div, Title, Form, Button, Erro} from './styles';

const Login = () =>  {
    
    const[cred, setCred] = useState({
        username:'',
        password:'',
        erro:''
    })
    const {login, error} = useAuth();

    const handleLogin = useCallback((event) =>{
        login(cred);
        event.preventDefault();
    }, [cred, login]);


    return(
        <Div className='Global'>
            <Div className='Header'>
            <Image src={imgLogo} className="logo"/>
            <Title>
                Entrar no Piupiuwer
            </Title>
            </Div>

            <Div  className='Login-box'>
                <Form >
                    <Input type="text" 
                        className="input-login" 
                        placeholder="Usuário" 
                        value={cred.username} 
                        onChange={e => {
                                setCred({...cred, username: e.target.value});
                            }
                        }
                    />

                    <Input type="text" 
                        className="input-login" 
                        placeholder="Senha" 
                        value={cred.password} 
                        onChange={e => {
                                setCred({...cred, password: e.target.value});
                            }
                        } 
                    />

                    <Button className="Login-button" type="submit" onClick={handleLogin}>
                        Entrar
                    </Button>
                    <Erro>{error}</Erro>
                </Form>
            </Div>
        </Div>
    );
};



export default Login;

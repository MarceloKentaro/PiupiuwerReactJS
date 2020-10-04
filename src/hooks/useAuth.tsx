import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
    error:string;
}
interface AuthContextData{
    user: object;
    token:string;
    error:string;
    login(user: object): void;
    logout(): void;
    
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({children}) =>{
    const [data,setData] = useState<AuthState>({} as AuthState);

    useEffect(()=> {
        async function carregarDados(){
            const user = localStorage.getItem('@Piupiuwer:cred');
            const token = localStorage.getItem('@Piupiuwer:token');
            if(user && token){
                //  api.defaults.headers.authorization = `JWT ${token}`;
                setData({user: JSON.parse(user), token: token, error:''});    
            }
        }
        carregarDados()
    }, []);

    const login = useCallback(async(cred) => {
        try{
            const response = await api.post('/login/', cred);
            
            const{token} = response.data;
            localStorage.setItem('@Piupiuwer:token', token);

            if (!!token) {
                const userResponse = await api.get(`usuarios/?search=${cred.username}`);
                const user = userResponse.data[0];
                localStorage.setItem('@Piupiuwer:cred', JSON.stringify(user));
                setData({token: token, user: user, error:''});
            }
        } catch(erro){
            setData({...data, error:"Usuário ou Senha incorretos!"})

        }
     
        },[data]);
        //api.defaults.headers.authorization = `JWT ${token}`;

    const logout = useCallback(async() => {   
        localStorage.removeItem('@Project:cred');
        localStorage.removeItem('@Project:token');
        setData({} as AuthState);
    },[]);

    return(
        <AuthContext.Provider value={{user:data.user, token:data.token, error:data.error, login, logout}}>
            {children}
        </ AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}



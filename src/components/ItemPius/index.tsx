import React,{useCallback} from 'react';
import {Div, Li, P, Strong, Span, Button} from './styles';

import Image from '../../components/Image';
import Like from '../../assets/images/like.svg';
import Favorito from '../../assets/images/highlight.svg';

import api from '../../services/api';
import {useAuth} from '../../hooks/useAuth';

export interface usuario{
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    sobre: string;
    foto: string;
}

export interface Piu {
    id: number;
    usuario: usuario;
    likers: object;
    favoritado_por: object;
    texto: string;
    horario: string;
}

interface PiuProps {
    piu: Piu;
}



const PiusItem: React.FC<PiuProps> = ({piu}) =>{
    const{user, token}=useAuth();

    /* Dar Like*/
    const handleLike = useCallback(async(user, piu, token) => {
        const data={
            usuario:user.id,
            piu:piu.id,
        }
        const response = await api.post('/pius/dar-like/',
            data,
            { 
            headers:{
                Authorization: `JWT ${token}`
            },
        });
        console.log(response);
    },[]);

    /* Favoritar */
    const handleFavorito = useCallback(async(user, piu, token) => {
        const data={
            usuario:user.id,
            piu:piu.id,
        }
        const response = await api.post('/pius/favoritar/',
            data,
            { 
            headers:{
                Authorization: `JWT ${token}`
            },
        });
        console.log(response);
    },[]);

    return(

        <Li className="piu">
            <Image src={piu.usuario.foto} className="foto-perfil"/>
            <Div className="conteudo-piu">
                <Strong>
                    {piu.usuario.first_name +" "+ piu.usuario.last_name}
                    <Span>{" @"+piu.usuario.username}</Span>
                </Strong>
                <P className="mensagem">{piu.texto}</P>
                <Div className="interacao">
                    <Button className="Like" type="submit" onClick={e=>{handleLike(user, piu,token)}}>
                        <Image src={Like} className="icone-piu"/>
                        <Span>{Object.keys(piu.likers).length }</Span>
                    </Button>
                    <Button className="Favorito"type="submit" onClick={e=>{handleFavorito(user, piu,token)}} >
                        <Image src={Favorito} className="icone-piu"/>
                        <Span>{Object.keys(piu.favoritado_por).length}</Span>
                    </Button>
                </Div>
            </Div>
        </Li>
    );
}
export default PiusItem;

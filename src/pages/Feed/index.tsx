import React, { useState, useCallback} from 'react';
import api from '../../services/api';
import {useAuth} from '../../hooks/useAuth';

import PiusItem, {Piu} from '../../components/ItemPius';
import Input from '../../components/FormInput';
import Image from '../../components/Image';

import {Title, Div, Aside, Ul, Li, A, Strong, H1, P, Header, Main, Body, Form, BotaoPiu, Contador, Erro, Logout, BotaoSair} from './styles';

import Home from '../../assets/images/home.svg';
import Explore from '../../assets/images/hashtag.svg';
import Notification from '../../assets/images/notification.svg';
import Message from '../../assets/images/message.svg';
import Save from '../../assets/images/save.svg';
import Note from '../../assets/images/note.svg';
import Profile from '../../assets/images/profile.svg';
import More from '../../assets/images/more_circle.svg';
import Logo from '../../assets/images/logo.svg';
import Search from '../../assets/images/search.svg';
import Textarea from '../../components/Textarea';



const Feed = () =>  {
    const{user, token, logout}=useAuth();
    //Abaixo é para registrar erro na postagem de um PIU
    const[erro,setErro] = useState({
        classe:'',
        mensagem:''
    });

    //Pegar meus dados
    const[myinfo,setMyinfo] = useState({
        nome:'',
        usuario:'',
        foto:''
    });
    const getMyinfo = useCallback((user) => {
        setMyinfo({nome:user.first_name, usuario:user.username, foto:user.foto});
    },[user]);

    /* Pegando Pius*/
    const[pius, SetPius] = useState([]);
    async function getPius(){
        const response = await api.get('/pius/');
        SetPius(response.data);
    }
    const[contador, setContador] = useState({
        caracteres:'',
    });

    /* Postando Pius*/
    const postPiu = useCallback(async(user, token, text) => {
        const data={
            usuario:user.id,
            texto:text
        }
        const response = await api.post('/pius/',
            data,
            { 
            headers:{
                Authorization: `JWT ${token}`
            },
        });
        //console.log(response);
    },[]);
    
    return(
            <Body className="container" onLoad={getPius}>
            <Title>PiuPiuwer</Title>
                <Aside className="barra-esquerda"  onLoad={e=> getMyinfo(user)}>
                    <Ul>
                        <Image src={Logo} className="logo" />
                        <Li>
                            <A><Image src={Home} className="Icone" /><P className="menu">Página inicial</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Explore} className="Icone" /><P className="menu">Explorar</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Notification} className="Icone" /><P className="menu">Notificações</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Message} className="Icone" /><P className="menu">Menssagens</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Save} className="Icone" /><P className="menu">Itens Salvos</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Note} className="Icone" /><P className="menu">Listas</P></A>
                        </Li>
                        <Li>
                            <A><Image src={Profile} className="Icone" /><P className="menu">Perfil</P></A>
                        </Li>
                        <Li>
                            <A><Image src={More} className="Icone" /><P className="menu">Mais</P></A>
                        </Li>
                    </Ul>

                    <Div className="perfil-box">
                        <Div className="info">
                            <Image src={myinfo.foto} className="perfil" />
                            <Strong>{myinfo.nome}<P className="usuario">{'@'+ myinfo.usuario}</P></Strong>
                        </Div>
                    </Div>
                </Aside>
                <Main> 
                    <Header className="Principal">
                        <Div className="titulo">
                            <H1>Página Inicial</H1>
                        </Div>

                        <Div className="container">
                            <Image src={myinfo.foto} className="perfil-texto" />
                            <Form >
                                <Textarea className={erro.classe} cols={47} rows={4} wrap="hard" placeholder="O que está acontecendo?" value={contador.caracteres} 
                                onChange={
                                    event => {
                                        if(event.target.value.length > 140){
                                            
                                            setErro({classe:"full", mensagem:'Passou o limite de caracteres!'});
                                            console.log(typeof(erro.classe));
                                        }
                                        else{
                                            setErro({classe:"", mensagem:''});
                                            setContador({caracteres: event.target.value});
                                        }
                                    }
                                }
                                />
                                <Contador className={erro.classe}>{contador.caracteres.length}/140</Contador>
                                <BotaoPiu
                                    className={erro.classe} type="submit"
                                    onClick={
                                        event => {
                                            if(contador.caracteres.length === 0){
                                                event.preventDefault();
                                                setErro({classe:"vazio", mensagem:'Caixa de texto está vazia!'});
                                            }
                                            else{
                                                postPiu(user, token,contador.caracteres);
                                            }
                                        }
                                    }
                                >Piar</BotaoPiu>
                                <Erro className={erro.classe}>{erro.mensagem}</Erro>
                            </Form>
                        </Div>
                    </Header>
                    
                    <Ul>
                    {pius.map((piu:Piu) => {
                        return <PiusItem key={piu.id} piu={piu} />;
                        })
                    }
                    </Ul>
                    </Main>

                <Aside className="barra-direita">
                    <Div className="box-search">
                        <Image src={Search} className="search-img"/>
                        <Input type="text" placeholder="Buscar no Piupiuwer" className="buscar"/>
                    </Div>
                    <Logout>
                        <BotaoSair onClick={logout}>Sair</BotaoSair>
                    </Logout>
                </Aside>
            </Body>
    );
}

export default Feed;
import styled from 'styled-components';

export const Title = styled.title``;

export const Body = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    width: 90vw;
    max-width: 800px;

    @media(min-width:800px){
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;

    }
`;
export const Div = styled.div.attrs(props =>({
	className: props.className,
}))`
    &.perfil-box{
        display: flex;
        align-items:flex-start;
        position: fixed;
        bottom:0.3rem;
        /*Descobrir como fazer ´ra sumir quando diminui o tamnanho da tela*/
        /*
        @media (max-height: 500px){
        :root{
            display:none;
            position: relative;
        }*/
    }

    &.info{
        display: flex; 

    }
    
    &.titulo{
        height:3.5rem;
        border-bottom: 0.1rem solid var(--color-secondary);
        margin-bottom: 0.5rem;
    }

    &.box-search{
        display: flex;
        width:25rem;
        height:4rem;
        border-radius:30px;
        background: var(--color-background-grey);
        margin-left:1rem;
    }


`;
export const Aside = styled.aside.attrs(props =>({
	className: props.className,
}))`
    &.barra-esquerda{
        width: 25%;
        height:100%;
        margin-right:5rem;
        border-right: 0.1rem solid var(--color-secondary);
        @media(min-width:800px){
            width: 100%;

        }
    }

    &.barra-direita{
        display:none;
        height:100%;
        border-left: 0.1rem solid var(--color-secondary);
        @media(min-width:800px){
            display:flex;
            width: 25%;
            margin-top:1rem;
        }
    }
`;

export const Ul = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:2rem 0 0 0;
    list-style:none;
`;

export const Li = styled.li`
    font-size: 1.8rem;
    padding: 1rem 0.4rem;
`;


export const A = styled.a`
    display:flex;
    align-items:center;
    margin-right:1rem;
`;

export const Strong = styled.strong`
    display:none;

    @media(min-width: 1000px){
        font-size: 2rem;
        display:flex;
        flex-direction:column;
        margin-left:1rem;
    }
`;

export const Header = styled.header`
    width:100%;
    height:18%;
    border-bottom: 1rem solid var(--color-secondary);
    margin-top: 0.2rem;
    display:flex;
    flex-direction: column;
`;
export const H1 = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    margin-left:1rem;
`;

export const P = styled.p.attrs(props =>({
	className: props.className,
}))`
    &.menu{
        display:none;

        @media (min-width: 800px){
            display:inline;
            font-size: 1.8rem;
            margin-left:1rem;
        }
    }

    &.usuario{
        font-weight: normal;
        font-size: 1.5rem;
        color: var(--color-secondary-dark);
    }


`;

export const Main = styled.main`
    width:45rem;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    padding: 1rem 1rem 0 1rem;
    
`;

export const Erro = styled.p`
    margin-top:2rem;
    font-size:1.5rem;
    color: red;
`;
export const BotaoPiu = styled.button.attrs(props =>({
	className: props.className,
}))`
    width: 10rem;
    height: 3rem;
    border-radius: 30px;
    color:var(--color-primary);
    background:var(--color-background-yellow);
    font-weight:bold;
    font-size:1.5rem;
    border: none;

    &.full{
        display:none;
    }
`;

export const Contador = styled.p.attrs(props =>({
	className: props.className,
}))`
    display: flex;
    color: var(--color-secondary-dark);
    font-size: 1.5rem;
    margin-right:3rem;
    margin-bottom:1rem;

    &.full{
        color:var(--color-error);
    }
`;

export const Logout = styled.div`
    margin-left: 5rem;
    margin-top: 1rem;




`;

export const BotaoSair = styled.button`
    width: 6rem;
    height: 2.5rem;
    border-radius: 20px;
    color:var(--color-primary);
    background:var(--color-background-yellow);
    font-size:1.5rem;
    border: none;

`;
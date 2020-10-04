import styled from 'styled-components';

export const Div = styled.div.attrs(props =>({
	className: props.className,
}))`
    &.conteudo-piu{
        margin-left:10px;
        display:flex;
        flex-direction: column;
        flex: 0 1 auto;
    }

    &.interacao{
        display:fle;
    }

`;

export const Ul = styled.ul`
    list-style:none;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column; 
    width: 100%;
`;

export const Li = styled.li`
    border-bottom: 1px solid #e6ecf0;
    display: flex;
    margin: auto 10px;
    padding: 0 0.5rem 0.8rem 0.5rem;
    order:0;
`;

export const Strong = styled.strong`
    font-size:1.5rem;
    color:var(--color-primary);

`;

export const Span = styled.span`
    font-size:1.3rem;
    color:var(--color-primary-light);
    font-weight: normal;
    margin-left:0.5rem;
`;

export const Button = styled.button`
    display:flex;
    flex-direction:row;
    align-items: center;
    color:var(--color-primary-light);
    font-size:1rem;
    margin-left: 2rem;
    background: none;
    border: none;
    order:1;
    &:focus{
			outline:none;
		}
`;

export const P = styled.p.attrs(props =>({
	className: props.className,
}))`
    &.mensagem{
        font-size:1.3rem;
        columns: var(--color-primary-light);
        margin-top: 0.5rem;
        word-wrap: break-all;
        text-align: justify;
        margin: 1rem 0;
    }

`;
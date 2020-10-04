/* Componente Textarea*/
import styled from 'styled-components';

export const TextareaComponent  = styled.textarea.attrs(props =>({
	className: props.className,
}))`
    &.full{
        color:var(--color-primary-light);
        opacity:50%;
    }
    margin: -5rem 1rem 0px 0rem;
    width:85%;
    font-size: 2rem;
    border: none;
    outline: 0;
    resize: none;




`;

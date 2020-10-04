/* Componente Formulário*/
import styled from 'styled-components';

export const InputComponent = styled.input.attrs(props =>({
	className: props.className,
}))`
	&.input-login{
		width:80vw;
		height:5rem;
		border: none;
		border-bottom: 0.2rem solid #000;
		font-size: 1.7rem;
		color: var(--color-primary-light);
		background:var(--color-background-grey);
		margin-top: 1.5rem;
		padding:1rem;
		@media (min-width: 800px){
			font-size: 1.8rem;
			margin-top: 1.8rem;
			width:50rem;
			height:6rem;
		}

		&:focus{
			outline:none;
		}
	}

	&.buscar{
		border: none;
		width:21rem;
		font-size: 1.2rem;
		color: var(--color-secondary-black);
		background: none;
		padding: 1rem;
	}
		&:focus{
			outline:none;
		}

`;

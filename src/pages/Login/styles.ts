import styled from 'styled-components';

export const Div = styled.div.attrs(props =>({
	className: props.className,
}))`

	& .Header{
		display: flex;
		align-items: center;
		justify-content:center;
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	font-size:2.5rem;
	margin-top:1rem;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width:100%;
`;

export const Button = styled.button`
	width:80vw;
	height:5rem;
	margin-top: 1.3rem;
	border-radius: 3rem;
	font-size: 2rem;
	font-weight: bold;
	background:var(--color-background-yellow);
	border-style: none;
	@media (min-width: 800px){
	width:50rem;
	height:6rem;
	font-size: 2.2rem;

	&:focus{
			outline:none;
		}
	&:hover{
		background:	#dfad36;
	}
}
`;

export const Erro = styled.p`
	margin-top:2rem;
	font-size:2rem;
	color: red;
`;






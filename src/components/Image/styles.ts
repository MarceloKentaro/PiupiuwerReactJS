/* Componente Imagem*/
import styled from 'styled-components';

export const ImgComponent = styled.img.attrs(props =>({
	className: props.className,
}))`
	&.logo{
		width:4rem;
		height:5rem;
		margin-left:-0.1rem;

		@media(min-width: 800px){
			width:4rem;
			height:5rem;
			margin-left:-0.3rem;
    	}	

	}

    &.Icone{
        width:2.7rem;
		height:2.7rem;

		@media(min-width: 800px){
			width:2.3rem;
			height:2.3rem;
    	}	
		
    }

	&.perfil{
		width:4rem;
		height:4rem;
		border-radius: 50%;

	}

	&.botao-mais{
		display:none;

		@media(min-width: 800px){
			display:inline;
			width:2rem;
			height:1rem;
    	}	
	}

	&.perfil-texto{
		width:4.5rem;
		height:4.5rem;
		margin-left:0.5rem;
		margin-top:1rem;
		border-radius: 50%;
		@media(min-width: 800px){
			width:5rem;
			height:5rem;
    	}		
	}
	
	&.search-img{
		margin-left:1rem;
	}

	
	&.foto-perfil{
		object-fit: cover;
	    width: 5rem;
    	height: 5rem;
    	border-radius: 50%;
    	margin: 5px 5px;
	}

	&.icone-piu{
		:hover{
			width: 80%;
			transition: 100ms;
			background:var(--color-background-yellow);
			border-radius: 50%;
		}
	}
`;
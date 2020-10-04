import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
    font-size: 60%;
    --color-primary: #1f2226;
    --color-primary-light: #657786;
    --color-secondary: #e6ecf0;
    --color-secondary-dark: #9a9a9a;
    --color-background-grey:#F5F8FA;
    --color-background-yellow:#FFD23F;
    --color-error:#FF0000;

}


    *{
        margin: 0;
        padding: 0;
        font-size: 60%;
        box-sizing: border-box;

    }

  
    html, body{
        height: 100%;
    }

    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea{
    font: 500 1.6rem Roboto;
    color: var(--color-primary);
    }


    @media (min-width: 800px){
        :root{
            font-size: 62.5%;
        }
    }
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background-color: 
        #F2F2F2;
        padding: 2rem 5rem 0 5rem;
    }

    img {
        width: 100%;
    }
    a {
        text-decoration: none;
    }
`;

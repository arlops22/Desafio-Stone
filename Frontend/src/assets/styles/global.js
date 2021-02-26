import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        background: var(--secondary-green);
    }

    *, input, button {
        border: none;
        outline: 0;
        background: none;
        
        font: 400 16px Inter;
    }

    :root {
        --primary-green: #42EC9A;
        --secondary-green: #14A94B;
        --tertiary-green: #A0DFB4;
        --lead-green: #91CA3F;
        --client-green: #0A3F28;
        --white: #fff;
        --black: #20252A;
        --black-shadow: #0000004d;
        --gray: #919DAB;
    }
`;

export default GlobalStyle;
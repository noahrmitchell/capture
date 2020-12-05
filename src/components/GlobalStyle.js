import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --accent: #23d997;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid var(--accent);
    background: transparent;
    transition: all 0.5s ease; 
    &:hover {
        background-color: var(--accent);
        color: white;
    }
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
    color: white;
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}

span {
    font-weight: bold;
    color: var(--accent);
}

a {
    font-size: 1.1rem;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}


`

export default GlobalStyle;
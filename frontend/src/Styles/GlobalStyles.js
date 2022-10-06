import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
    --navback: #28104e;
    --navtext: #f3effe;
    --linkhov: #ff4778;
    --span: #deacf5;
    --sidebar: #6237a0;
    }

    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    body{
        /* background-color: #5cdb85; */
    }
    header{
        background-color: var(--navback);
        /* border-bottom: 2px solid #28104e; */
    }
`
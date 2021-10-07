import { createGlobalStyle } from "styled-components";

const GobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      
    }

    html, body{
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: #1F1C2A;
    }
`;

export default GobalStyles
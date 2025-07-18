import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";  
import 'react-toastify/dist/ReactToastify.css'; // importando o css do react-toastify

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryDarkColor};
        color: ${colors.primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer; // deixa o cursor em forma de mãozinha quando passa por cima do botão
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 1em;
    }
    a {
        text-decoration: none; // tira o sublinhado dos links
        color: ${colors.primaryColor};
    }
    ul { 
        list-style: none; // tira as bolinhas das listas
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor};
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.errorColor};
    }
        
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30 auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
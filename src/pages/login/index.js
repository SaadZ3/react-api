import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/globalStyles"; 
import { Title } from "./styled"; // importado desse jeito porque ele nao é default
import * as exampleActions from '../../store/modules/example/actions'; // importando as actions do exemplo

export default function Login() {
  const dispatch = useDispatch(); // disparador
  
  function handleClick(e) {
    e.preventDefault(); 
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
        <Title>
            <small>Login</small>
        </Title>
        <p>Lorem20 ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button type="button" onClick={handleClick}>Entrar</button>
    </Container>
  );
}


import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';
import { Link } from 'react-router-dom'; // isso é necessário para usar o Link do react-router-dom
import { useSelector } from 'react-redux'; // importando o useSelector para acessar o estado da store

export default function Header() {
    const botaoClicado = useSelector(state => state.example.botaoClicado); // acessando o estado do botão clicado

    return (
        <Nav>
            <Link to="/"> <FaHome size={24}/> </Link>
            <Link to="/login"> <FaUserAlt size={24}/> </Link>
            <Link to="/leave"> <FaSignInAlt size={24}/> </Link>

            {botaoClicado ? 'Clicado' : 'Não clicado'}
        </Nav>
    )
}
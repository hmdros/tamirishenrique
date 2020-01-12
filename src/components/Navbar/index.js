import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Navbar() {
  return (
    <>
      <Link to="/" >
        <p>Início</p>
      </Link>
      <Link to="/gallery" >
        <p>Galeria de Fotos</p>
      </Link>
      <Link to="/bestmans" >
        <p>Padrinhos e Madrinhas</p>
      </Link>
      <Link to="/giftlist" >
        <p>Lista de Presentes</p>
      </Link>
      <Link to="/place" >
        <p>Local e Data</p>
      </Link>
      <Link to="/thanks" >
        <p>Obrigado</p>
      </Link>
    </>
  );
}

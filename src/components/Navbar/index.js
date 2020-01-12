import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Link to="/">
        <h3>Início</h3>
      </Link>
      <Link to="/history">
        <h3>Nossa Historia</h3>
      </Link>
      <Link to="/bestmans">
        <h3>Padrinhos e Madrinhas</h3>
      </Link>
      <Link to="/place">
        <h3>Local e Data</h3>
      </Link>
      <Link to="/giftlist">
        <h3>Lista de Presentes</h3>
      </Link>
      <Link to="/gallery">
        <h3>Galeria de Fotos</h3>
      </Link>
    </Container>
  );
}

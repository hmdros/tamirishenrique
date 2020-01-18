import React, {useState } from 'react';
import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';

import { Container, MenuSmall } from './styles';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState([]);

  function handleClickMenu() {
    console.log('aparece menu');
  }

  return (
    <>
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
    <MenuSmall>
      <MdMenu fontSize="45px" onClick={handleClickMenu}/>
    </MenuSmall>
    </>
  );
}

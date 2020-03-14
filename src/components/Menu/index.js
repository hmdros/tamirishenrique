import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        <h3>Início</h3>
      </Link>
      <Link to="/history" onClick={() => setOpen(!open)}>
        <h3>História</h3>
      </Link>
      <Link to="/bestmans" onClick={() => setOpen(!open)}>
        <h3>Padrinhos</h3>
      </Link>
      <Link to="/place" onClick={() => setOpen(!open)}>
        <h3>Local</h3>
      </Link>
      <Link to="/giftlist" onClick={() => setOpen(!open)}>
        <h3>Presentes</h3>
      </Link>
      <Link to="/gallery" onClick={() => setOpen(!open)}>
        <h3>Galeria</h3>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

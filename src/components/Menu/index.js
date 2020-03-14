import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        <h4>Início</h4>
      </Link>
      <Link to="/history" onClick={() => setOpen(!open)}>
        <h4>História</h4>
      </Link>
      <Link to="/bestmans" onClick={() => setOpen(!open)}>
        <h4>Padrinhos</h4>
      </Link>
      <Link to="/place" onClick={() => setOpen(!open)}>
        <h4>Local</h4>
      </Link>
      <Link to="/giftlist" onClick={() => setOpen(!open)}>
        <h4>Presentes</h4>
      </Link>
      <Link to="/gallery" onClick={() => setOpen(!open)}>
        <h4>Galeria</h4>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

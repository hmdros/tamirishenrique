import React from 'react';

import { Container, BestmanList, BrideMade } from './styles';

export default function Bestmans() {
  return (
    <Container>
      <h1>Padrinhos e Madrinhas</h1>
      <BestmanList>
        <h3>Padrinhos da Noiva</h3>
        <li>Casal A</li>
        <li>Casal B</li>
        <li>Casal C</li>
        <li>Casal D</li>
        <h3>Padrinhos do Noivo</h3>
        <li>Casal E</li>
        <li>Casal F</li>
        <li>Casal G</li>
        <li>Casal H</li>
      </BestmanList>
      <BrideMade>
        <h3>Damas de honra</h3>
        <li>Criança A</li>
        <li>Criança B</li>
        <li>Criança C</li>
        <li>Criança D</li>
      </BrideMade>
    </Container>
  );
}

import React from 'react';

import { Container, BestmanList, BrideMade, Header } from './styles';

export default function Bestmans() {
  return (
    <Container>
      <Header>
        <h1>Padrinhos e Madrinhas</h1>
      </Header>
      <BestmanList>
        <h3>Padrinhos da Noiva</h3>
        <li>Lais e Gabriel</li>
        <li>Luíz e Fábio</li>
        <li>Casal C</li>
        <li>Casal D</li>
        <li>Casal E</li>
        <h3>Padrinhos do Noivo</h3>
        <li>Débora e Felipe</li>
        <li>André e Larissa</li>
        <li>Rauny e Marcella</li>
        <li>Thiago e Mariana</li>
        <li>Áurea e Fernando</li>
      </BestmanList>
      <BrideMade>
        <h3>Damas de honra</h3>
        <li>Alena</li>
        <li>Maria Júlia</li>
      </BrideMade>
    </Container>
  );
}

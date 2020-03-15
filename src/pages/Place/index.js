import React from 'react';

import { Container, Igreja, Perola, Header, Info } from './styles';

export default function Place() {
  return (
    <Container>
      <Header>
        <h1>Lugar e Data</h1>
      </Header>
      <Info>
        <h3>Nosso casamento será no dia 19 de setembro de 2020, onde contamos com a presença de nossos convidados nos locais escolhidos por nos.</h3>
        <h2>Celebração</h2>
        <h3>Igreja Santo Antônio de Lisboa</h3>
        <Igreja />
        <h4>20:00h</h4><span>(Horário de Brasília)</span>
        <h2>Recepção</h2>
        <h3>Pérola Recepções</h3>
        <Perola />
        <h4>22:00h</h4><span>(Horário de Brasília)</span>
      </Info>
    </Container>
  );
}

import React from 'react';

import { Container, BestmanList, BrideMade, Header } from './styles';

export default function Bestmans() {
  return (
    <Container>
      <Header>
        <h1>Padrinhos e Madrinhas</h1>
      </Header>
      <BestmanList>
        <h2>Padrinhos da Noiva</h2>
        <li>
          <div>
            <h3>Lais e Gabriel</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Carolina e Daniel</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Nara Percília e Kaleo</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Luiz e Emanuella</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Fábio e Ellen</h3>
          </div>
        </li>
        <h2>Padrinhos do Noivo</h2>
        <li>
          <div>
            <h3>Débora e Felipe</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Socorro e Reginaldo</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Áurea e Fernando</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>André e Larissa</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Rauny e Marcella</h3>
          </div>
        </li>
      </BestmanList>
      <BrideMade>
        <h2>Daminhas e Pajens</h2>
        <li>
          <div>
            <h3>Alena</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Maria Júlia</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Bernardo</h3>
          </div>
        </li>
        <li>
          <div>
            <h3>Tomás</h3>
          </div>
        </li>
      </BrideMade>
    </Container>
  );
}

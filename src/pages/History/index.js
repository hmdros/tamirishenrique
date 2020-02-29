import React from 'react';
import {
  Container,
  TimeLine,
  FirstDate,
  Namoro,
  Engage,
  Engaged,
} from './styles';

export default function History() {
  return (
    <Container>
      <h1>Nossa História</h1>
      <TimeLine>
        <li>
          <FirstDate />
          <div>
            <span>09 de setembro de 2015</span>
            <h3>Primeiro Encontro</h3>
            <p>Nos conhecemos numa festa de formatura em setembro de 2015. Pouco depois marcamos de nos encontrar num evento de uma igreja que frequentavámos, e depois fomos à uma sorveteria, onde aconteceu o primeiro beijo.</p>
          </div>
        </li>
        <li>
          <div>
            <span>19 de setembro de 2015</span>
            <h3>Início de Namoro</h3>
            <p>Pouco depois do primeiro beijo o relacionamento se intensificou e nos percebemos que éramos um do outro.</p>
          </div>
          <Namoro />
        </li>
        <li>
          <Engage />
          <div>
            <span>30 de março de 2019</span>
            <h3>Noivado</h3>
            <p>Noivamos em París, numa embarcação do Rio Sena. Durante todo o trajeito houve um almoço romântico com música e bons vinhos.</p>
          </div>
        </li>
        <li>
          <div>
            <span>19 de setembro de 2020</span>
            <h3>Casamento</h3>
            <p>Planejamos esta data por ser o nosso 5º aniversário de namoro, achamos que significa um marco em nossas vidas</p>
          </div>
          <Engaged />
        </li>
      </TimeLine>
    </Container>
  );
}

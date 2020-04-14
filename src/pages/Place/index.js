import React from 'react';

import { Container, Igreja, Perola, Header, Info } from './styles';

export default function Place() {
  return (
    <Container>
      <Header>
        <h1>Local</h1>
      </Header>
      <Info>
        <h3>
          Nosso casamento será no dia 19 de setembro de 2020, onde contamos com
          a presença de nossos convidados nos locais escolhidos por nos.
        </h3>
        <h2>Celebração</h2>
        <h3>Igreja Santo Antônio de Lisboa</h3>
        <Igreja />
        <h4>20:00h</h4>
        <span>(Horário de Brasília)</span>
        <iframe
          title="Igreja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15645.197787300127!2d-34.84462566246114!3d-7.108253657097385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd23894bbb83%3A0xa18129106e3074ca!2sPar%C3%B3quia%20Santo%20Ant%C3%B4nio%20de%20Lisboa!5e0!3m2!1spt-BR!2sbr!4v1584293605422!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullscreen=""
          aria-hidden="false"
        />
        <h2>Recepção</h2>
        <h3>Pérola Recepções</h3>
        <Perola />
        <h4>22:00h</h4>
        <span>(Horário de Brasília)</span>
        <iframe
          title="Recepção"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.28537750542!2d-34.84986098485929!3d-7.09288229487766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd711462ae15%3A0xcc55c435b919e095!2zUMOpcm9sYSBSZWNlcMOnw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1584293465102!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullscreen=""
          aria-hidden="false"
        />
      </Info>
    </Container>
  );
}

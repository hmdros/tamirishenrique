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
        {/* <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Lais e Gabriel</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Ana Carolina e Daniel</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Luiz e Fábio</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Nara Percília e Kaleo</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Carlos e Sara</h3>
          </div>
        </li> */}
        <h2>Padrinhos do Noivo</h2>
        {/* <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Débora e Felipe</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>André e Larissa</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Rauny e Marcella</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Maira do Socorro e Reginaldo</h3>
          </div>
        </li>
        <li>
          <div>
            <img src="https://picsum.photos/300/200" alt="imagem" />
          </div>
          <div>
            <h3>Áurea e Fernando</h3>
          </div>
        </li> */}
      </BestmanList>
      <BrideMade>
        <h2>Damas de honra</h2>
        <li>
          <div>
            <img
              src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1586830374/Site%20Casamento/padrinhos/Captura_de_tela_de_2020-04-13_23-12-15.png"
              alt="imagem"
            />
          </div>
          <div>
            <h3>Alena</h3>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1586830219/Site%20Casamento/padrinhos/Captura_de_tela_de_2020-04-13_23-07-33.png"
              alt="imagem"
            />
          </div>
          <div>
            <h3>Maria Júlia</h3>
          </div>
        </li>
      </BrideMade>
    </Container>
  );
}

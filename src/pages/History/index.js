import React from 'react';
import {
  Container,
  TimeLine,
  FirstDate,
  Namoro,
  Engage,
  Engaged,
  Header,
  Shadow
} from './styles';

export default function History() {
  return (
    <Container>
      <Header>
        <h1>Nossa História</h1>
      </Header>
      <TimeLine>
        <li data-aos="fade-in">
          <div>
            <span>10 de setembro de 2015</span>
            <h2>Primeiro Encontro</h2>
            <p>
              Nos conhecemos numa festa de formatura em 05 de setembro de 2015.
              Dias depois, marcamos de nos encontrar numa adoração da igreja que
              ela frequentava. Após esse momento, fomos à uma sorveteria, onde
              aconteceu o primeiro beijo.
            </p>
          </div>
          <FirstDate />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>19 de setembro de 2015</span>
            <h2>Início de Namoro</h2>
            <p>
              Pouco depois do primeiro beijo, o relacionamento se intensificou e
              nós percebemos que éramos um do outro. O pedido aconteceu na volta
              de uma viagem à Recife. E daí, passamos a dividir nossas
              histórias.
            </p>
          </div>
          <Namoro />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>30 de março de 2019</span>
            <h2>Noivado</h2>
            <p>
              Noivamos em Paris, a cidade dos românticos, durante um almoço à
              bordo de uma embarcação que passeava pelo Rio Sena, mostrando os
              pontos turísticos da cidade, com direito à vinho e boa música.
            </p>
          </div>
          <Engage />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>19 de setembro de 2020</span>
            <h2>A Pandemia</h2>
            <p>
              Muitos sonhos precisaram ser adiados no ano de 2020. Para nós, foi a nossa união. Foi uma decisão muito difícil na época, mas o que importa, olhando para trás, é saber que todos estamos bem e com saúde. 
            </p>
            <p>
              E nós continuamos vivendo esse amor há cinco anos, e contando... 
            </p>
          </div>
          <Engaged />
        </li>
        <li data-aos="fade-in">
          <div>
            <span>11 de setembro de 2021</span>
            <h2>Casamento</h2>
            <p>
              Finalmente o grande dia vai chegar, e poderemos realizar o nosso sonho de nos casarmos, após quase seis anos de relacionamento. Aguardamos todos vocês para celebrar conosco esse dia tão especial para nós!
            </p>
          </div>
          <Shadow />
        </li>
      </TimeLine>
    </Container>
  );
}

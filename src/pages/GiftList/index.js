import React, { Component } from 'react';

import { Container, Header, Body, GiftGrid, ExternalLists } from './styles';

import Gifts from '../../gifts/gifts.json';

export default class GiftList extends Component {

  state = {
    gifts: [],
  };

  async componentDidMount() {
    this.setState({
      gifts: Gifts.gifts,
    });
  }

  goToExternalUrl(external_url) {
    window.location.href=`${external_url}`
  }

  goToNewTab(url) {
    window.open(
      url,
      '_blank'
    );
  }

  render() {
    const { gifts } = this.state;

    return (
      <Container>
        <Header>
          <h1>Lista de Presentes</h1>
        </Header>
        <Body>
          <p>Esse site foi desenvolvido com todo carinho pelo noivo. Sintam-se seguros para dar seus presentes pelas imagens abaixo.</p>
          <p>Caso você prefira ir a uma loja física ou comprar por sites mais conhecidos, fizemos nossas listas de presentes na Camicado e na Quero de Casamento (Magazine Luiza). Basta clicar nas logomarcas abaixo.</p>
          <br/>
          <br/>
          
          <ExternalLists>
            <div onClick={() => {this.goToNewTab("http://lista.camicado.com.br/tamirishenrique")}}>
              <img
                height="120"
                width="180"
                src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1625843228/Site%20Casamento/gifts/logo-1360168069294.png"
                alt="lista1"
              />
            </div>
            <div onClick={() => {this.goToNewTab("http://finalfeliz.de/tamirishenrique")}}>
              <img
                src="https://res.cloudinary.com/djz3dt7lc/image/upload/v1625843228/Site%20Casamento/gifts/994444912_1280x720.jpg"
                alt="lista2"
                width="180"
                height="120"
              />
            </div>
          </ExternalLists>
          <br/>
          <br/>

          <p>Todos os links abaixo levam a uma página do MercadoPago.</p>
          <p>Esse site é totalmente confiável e o valor do presente será direcionado para nossa conta.</p>
          <GiftGrid>
            {gifts.map(gift => (
              <li key={gift.title}>
                <img src={gift.image} alt={gift.title} height="220" onClick={() => {this.goToExternalUrl(gift.external_url)}} />
                <strong>{gift.title}</strong>
                <span>{gift.price}</span>
                <button type="button" onClick={() => {this.goToExternalUrl(gift.external_url)}}>
                  <a href={gift.external_url}>Comprar</a>
                </button>
              </li>
            ))}
          </GiftGrid>
        </Body>
      </Container>
    );
  }
}

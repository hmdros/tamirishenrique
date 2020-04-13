import React, { Component } from 'react';

import { Container, Header, Body, GiftGrid } from './styles';

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

  render() {
    const { gifts } = this.state;

    return (
      <Container>
        <Header>
          <h1>Lista de Presentes</h1>
        </Header>
        <Body>
          <p>Todos os links levam a uma pagina do PagSeguro.</p>
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

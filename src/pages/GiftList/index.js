import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { Container, Header, Body, GiftGrid } from './styles';

import Gifts from '../../gifts/gifts.json';

export default class GiftList extends Component {

  state = {
    gifts: [],
  };

  async componentDidMount() {
    // const response = await api.get('tours');
    // this.setState({ tours: data });

    this.setState({
      gifts: Gifts.gifts,
    });
  }

  render() {
    const { gifts } = this.state;

    return (
      <Container>
        <Header>
          <h1>Lista de Presentes</h1>
        </Header>
        <Body>
          <GiftGrid>
            {gifts.map(gift => (
              <li key={gift.title}>
                <img src={gift.image} alt={gift.title} height="220" />
                <strong>{gift.title}</strong>
                <span>{gift.price}</span>
                <button type="button">
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

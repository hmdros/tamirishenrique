import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { Container, Header, Body, GiftGrid } from './styles';

class GiftList extends Component {

  state = {
    gifts: [],
  };

  async componentDidMount() {
    // const response = await api.get('tours');
    // this.setState({ tours: data });
    // todo: get giftlist from a json setting >
    // name, image, url, price
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
            Cota R$ 150
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=238734949-49442b67-bbf2-4df0-845f-75dc23dc7194">Comprar</a>
            {gifts.map(gift => (
              <li key={gift.title}>
                <img src={gift.image} alt={gift.title} height="220" />
                <strong>{gift.title}</strong>
                <p>{gift.location}</p>
                <span>{gift.priceFormated}</span>
              </li>
            ))}
          </GiftGrid>
        </Body>
      </Container>
    );
  }
}

export default GiftList;

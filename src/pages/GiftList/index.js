import React from 'react';

import { Container } from './styles';

export default function GiftList() {
  return (
    <Container>
      <h1>Lista de Presentes</h1>
      Cota R$ 150
      <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=238734949-49442b67-bbf2-4df0-845f-75dc23dc7194">Comprar</a>
    </Container>
  );
}

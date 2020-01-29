import React from 'react';

import { Container, TimeLine, FirstDate, Namoro, Engage, Engaged } from './styles';

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
            <p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé, boa gentis num é.</p>
          </div>
        </li>
        <li>
          <div>
            <span>19 de setembro de 2015</span>
            <h3>Início de Namoro</h3>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé, boa gentis num é.</p>
          </div>
          <Namoro />
        </li>
        <li>
          <Engage />
          <div>
            <span>30 de março de 2019</span>
            <h3>Noivado</h3>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé, boa gentis num é.</p>
          </div>
        </li>
        <li>
          <div>
            <span>19 de setembro de 2020</span>
            <h3>Casamento</h3>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mé, boa gentis num é.</p>
          </div>
          <Engaged />
        </li>
      </TimeLine>
    </Container>
  );
}

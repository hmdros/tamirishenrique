import styled from 'styled-components';

import igrejaimage from '../../assets/images/placeanddate/igreja.jpeg';
import perolaimage from '../../assets/images/placeanddate/perola.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TimeLine = styled.ul`
  li {
    display: flex;
    list-style-type: none;
  }
`;

export const Perola = styled.div`
  background-image: url(${perolaimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;`;

export const Igreja = styled.div`
  background-image: url(${igrejaimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;`;

import styled from 'styled-components';

import igrejaimage from '../../assets/images/placeanddate/igreja.jpeg';
import perolaimage from '../../assets/images/placeanddate/perola.jpg';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-family: 'Parisienne';
  color: #004760;
  font-size: 2rem;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;

  h2 {
    margin: 20px 0;
  }
`;

export const Perola = styled.div`
  background-image: url(${perolaimage});
  height: 200px;
  margin: 20px 0;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
`;

export const Igreja = styled.div`
  background-image: url(${igrejaimage});
  height: 200px;
  margin: 20px 0;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
`;

import styled from 'styled-components';
import hero from '../../assets/images/th/BAR_9798.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-family: 'Indie Flower';
    font-size: 80px;
    font-weight: lighter;
  }

`;

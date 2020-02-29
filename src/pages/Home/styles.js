import styled from 'styled-components';
import hero from '../../assets/images/th/engage_jpa1.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  justify-content: center;
  align-items: center;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-family: 'Sacramento';
    font-size: 90px;
    font-weight: normal;
    color: #d4d6b9;
  }
`;

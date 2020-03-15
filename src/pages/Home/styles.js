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
  align-items: flex-end;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-family: 'Parisienne';
    font-size: 90px;
    font-weight: bold;
    color: #004760;
    margin-bottom: 20px;

    @media (max-width: 576px) {
      font-size: 68px;
      text-align: center;
    }
  }
`;

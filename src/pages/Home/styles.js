import styled from 'styled-components';

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
  background-image: url('https://res.cloudinary.com/djz3dt7lc/image/upload/c_fit,w_1400/v1583003229/Site%20Casamento/th/engage_jpa1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-family: 'Parisienne';
    font-size: 120px;
    font-weight: bold;
    color: #004760;
    margin-bottom: 20px;

    @media (max-width: 576px) {
      font-size: 68px;
      text-align: center;
    }
  }
`;

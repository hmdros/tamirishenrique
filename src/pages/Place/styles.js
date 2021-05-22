import styled from 'styled-components';

const igrejaImage = 'https://res.cloudinary.com/djz3dt7lc/image/upload/v1583003160/Site%20Casamento/placeanddate/igreja.jpg';
const perolaImage = 'https://res.cloudinary.com/djz3dt7lc/image/upload/v1583003160/Site%20Casamento/placeanddate/perola.jpg';

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

  p {
    line-height: 25px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.5rem;
    margin: 90px 0 0 20px;
    color: #004760;
    font-family: 'Parisienne';
  }

  iframe {
    border-radius: 15px;
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
  }
`;

export const Perola = styled.div`
  background-image: url(${perolaImage});
  height: 300px;
  margin: 30px 0;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  border: 2px solid #ccc;
`;

export const Igreja = styled.div`
  background-image: url(${igrejaImage});
  height: 300px;
  margin: 30px 0;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  border: 2px solid #ccc;
`;

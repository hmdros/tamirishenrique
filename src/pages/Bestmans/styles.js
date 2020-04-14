import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  h2 {
    font-family: 'Parisienne';
    color: #004760;
    font-size: 3rem;
  }
`;
export const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  font-family: 'Parisienne';
  color: #004760;
  font-size: 2rem;
  text-align: center;
`;
export const BestmanList = styled.ul`
  li {
    display: flex;
    list-style-type: none;
    max-width: 1200px;
    margin: 40px auto;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
    }

    h3 {
      font-family: 'Parisienne';
      color: #004760;
      font-size: 2rem;
      margin: 0 20px;
    }
  }
`;

export const BrideMade = styled.ul`
  li {
    display: flex;
    list-style-type: none;
    max-width: 600px;
    margin: 40px auto;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
    }

    h3 {
      font-family: 'Parisienne';
      color: #004760;
      font-size: 2rem;
      margin-left: 15px;
    }
  }

  img {
    width: 200px;
    height: 300px;
    object-fit: contain;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

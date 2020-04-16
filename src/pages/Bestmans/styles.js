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
    max-width: 550px;
    margin: 40px auto;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h3 {
      font-family: 'Parisienne';
      color: #004760;
      font-size: 2rem;
      margin-left: 15px;
    }
  }

  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    overflow: hidden;
  }

  @media (max-width: 576px) {
    li {
      flex-wrap: wrap;
    }

    img {
      width: 350px;
      height: 350px;
      object-fit: contain;
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

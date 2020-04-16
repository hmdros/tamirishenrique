import styled from 'styled-components';

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

export const Body = styled.div`
  p {
    color: red;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
`;

export const GiftGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 567px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    background: #eee;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 4px;
      border: 1px solid #;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;

      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      transition-duration: 0.3s;
      transition-property: box-shadow;
    }

    img:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }

    > strong {
      font-size: 20px;
      line-height: 20px;
      color: #333;
      margin-top: 15px;
      text-align: center;
    }

    > span {
      text-align: center;
      font-size: 21px;
      font-weight: bold;
      margin: 10px 20px 20px;
    }

    button {
      background: #004760;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 8px;
      justify-content: center;
      display: flex;
      align-items: center;

      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
      transform: scale(1);
      animation: pulse 2s infinite;

      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
        }

        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 5px;
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

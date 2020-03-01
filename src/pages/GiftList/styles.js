import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`;

export const Header = styled.div`
  justify-content: center;
  display: flex;
`;

export const Body = styled.div`
  p {
    color: yellow;
  }
`;

export const GiftGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #368881;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 8px;
      justify-content: center;
      display: flex;
      align-items: center;

      &:hover {
        background: #368881;
      }

      a{
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

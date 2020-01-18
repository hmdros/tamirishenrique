import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: ${props => (props.transparent ? 'transparent' : '#E8F2F8')};

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    /* TELA GRANDE */
    display: none;
  }


`;

export const MenuSmall = styled.div`
  @media only screen and (min-width: 600px) {
    /* TELA PEQUENA */
    display: none;
  }
`;

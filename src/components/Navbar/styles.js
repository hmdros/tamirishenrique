import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: 'transparent';

  a {
    text-decoration: none;
    color: #CACAAA  ;
    font-size: 22px;
    padding: 10px;
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

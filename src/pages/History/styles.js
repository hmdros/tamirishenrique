import styled from 'styled-components';
import firstdateimage from '../../assets/images/th/first_date.jpg';
import namoroimage from '../../assets/images/th/first_trip.jpg';
import engageimage from '../../assets/images/th/engage_paris.jpg';
import engagedimage from '../../assets/images/th/engage_jpa3.jpg';

export const Container = styled.div`
  height: 100vh;
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

export const TimeLine = styled.ul`
  @media only screen and (min-width: 576px) {
    li {
      display: flex;
      list-style-type: none;
      max-width: 1200px;
      margin: 40px auto;
      align-items: center;
      text-align: justify;

      div {
        width: 50%;
        margin: 0 30px;
      }

      span {
        font-size: 1.5rem;
        font-weight: lighter;
        font-family: 'Italliano';
      }

      h2 {
        font-family: 'Parisienne';
        padding: 8px;
        font-size: 2.5rem;
        color: #004760;
      }

      p {
        font-size: 1.3rem;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    width: 330px;
    margin-top: auto;

    li {
      list-style-type: none;
      text-align: justify;
      margin: 60px 0;
    }
    span {
      font-size: 1.2rem;
      font-weight: lighter;
      font-family: 'Italliano';
    }

    h2 {
      font-family: 'Parisienne';
      padding: 8px;
      font-size: 2rem;
      color: #004760;
    }

    p {
      font-size: 1rem;
      line-height: 25px;
    }

    div {
      width: 100%;
    }
  }
`;

export const FirstDate = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${firstdateimage});
  height: 260px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;

export const Namoro = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${namoroimage});
  height: 260px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;

export const Engage = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${engageimage});
  height: 260px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;

export const Engaged = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${engagedimage});
  height: 260px;
  width: 350px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 576px) {
    padding: 0;
    margin: 0;
  }
`;

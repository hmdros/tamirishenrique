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
`;

export const TimeLine = styled.ul`
  li {
    display: flex;
    list-style-type: none;
    width: 800px;
    margin: 40px auto;

    div {
      width: 50%;
    }

    @media only screen and (max-width: 576px) {
      width: 350px;
      margin-top: auto;
    }
  }
`;

export const FirstDate = styled.div`
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${firstdateimage});
  height: 160px;
  width: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Namoro = styled.div`
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${namoroimage});
  height: 160px;
  width: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Engage = styled.div`
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${engageimage});
  height: 160px;
  width: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Engaged = styled.div`
  border-radius: 10px;
  box-shadow: 1px solid #ddd;
  margin: 0 10px;
  padding: 20px;
  background-image: url(${engagedimage});
  height: 160px;
  width: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

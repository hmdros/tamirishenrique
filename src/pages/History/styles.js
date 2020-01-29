import styled from 'styled-components';
import firstdateimage from '../../assets/images/th/first_date.jpg';
import namoroimage from '../../assets/images/th/first_trip.jpg';
import engageimage from '../../assets/images/th/engage_paris.jpg';
import engagedimage from '../../assets/images/th/engage_jpa3.jpg';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TimeLine = styled.ul`
  li {
    display: flex;
    list-style-type: none;
  }
`;

export const FirstDate = styled.div`
  background-image: url(${firstdateimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Namoro = styled.div`
  background-image: url(${namoroimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Engage = styled.div`
  background-image: url(${engageimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Engaged = styled.div`
  background-image: url(${engagedimage});
  height: 200px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

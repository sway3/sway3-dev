import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Slogan1 = styled.h1`
  font-size: 100px;
  font-weight: 400;
  height: 105px;
  text-decoration: underline;
  text-decoration-color: #008080;
`;

export const Slogan2 = styled.h1`
  font-size: 100px;
  font-weight: 300;
  height: 110px;
`;

export const Slogan3 = styled.h1`
  font-size: 100px;
  font-weight: 400;
  text-decoration: underline;
  text-decoration-color: #008080;
`;

export const ProfileImg = styled.img`
  width: 330px;
  margin: 0 0 0 20px;
`;

export const PhotoContainer = styled.div``;

export const PhotoBox = styled.div``;

export const WelcomeContainer = styled.p`
  font-size: 45px;
  text-align: center;
`;

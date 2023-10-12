import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const Title = styled.h1`
  font-size: 62px;
  font-weight: 300;
  color: #fff;
  margin: 0 0 30px 0;
  padding: 0 10px;
  background-color: #008080;
  align-self: flex-start;
`;

export const ContactContainer = styled.div`
  margin: 30px 0 0 0;
`;

export const ProfileImg = styled.img`
  width: 250px;
`;

export const Description = styled.p`
  font-size: 24px;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  padding: 20px;
  transition: 0.3s;

  &:hover {
    /* filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(43deg)
      brightness(118%) contrast(114%); */

    filter: invert(92%) sepia(73%) saturate(0%) hue-rotate(77deg)
      brightness(104%) contrast(103%);
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0 20px 0 0;
  padding: 15px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #008080;
    border-color: #008080;
  }
`;

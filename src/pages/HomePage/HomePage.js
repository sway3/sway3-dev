import Header from '../../components/Header/Header';

import {
  Container,
  HomeContainer,
  PhotoBox,
  PhotoContainer,
  Slogan1,
  Slogan2,
  Slogan3,
  SloganContainer,
} from './style';

import profile from '../../assets/img/memoji.jpg';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeContainer>
          <SloganContainer>
            <Slogan1>Simplicity</Slogan1>
            <Slogan2>is prerequisite</Slogan2>
            <Slogan3>for reliability</Slogan3>
          </SloganContainer>
          <PhotoContainer>
            <PhotoBox>
              <img src={profile} alt='profile' width='300' height='300' />
            </PhotoBox>
          </PhotoContainer>
        </HomeContainer>
      </Container>
    </>
  );
};

export default HomePage;

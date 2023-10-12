import Header from '../../components/Header/Header';

import {
  Container,
  HomeContainer,
  PhotoBox,
  PhotoContainer,
  Slide,
  Slogan1,
  Slogan2,
  Slogan3,
  ProfileImg,
  SloganContainer,
  WelcomeContainer,
} from './style';

import profile from '../../assets/img/memoji.png';

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeContainer>
          <Slide>
            <SloganContainer>
              <div>
                <Slogan1>Simplicity</Slogan1>
                <Slogan2>is prerequisite</Slogan2>
                <Slogan3>for reliability.</Slogan3>
              </div>
              <div>
                <PhotoBox>
                  <ProfileImg src={profile} alt='profile' />
                </PhotoBox>
              </div>
            </SloganContainer>
          </Slide>
          <Slide>
            <WelcomeContainer>
              Welcome! I am <strong> Seungwoo Kim</strong>,<br />a software
              developer specialising in front-end.
            </WelcomeContainer>
          </Slide>
        </HomeContainer>
      </Container>
    </>
  );
};

export default HomePage;

import Header from '../../components/Header/Header';
import {
  Title,
  Container,
  InnerContainer,
  ContactContainer,
  IconButton,
  Description,
  ProfileImg,
  Icon,
  IconContainer,
} from './style';

import contact from '../../assets/img/contact.png';
import github from '../../assets/icon/github.svg';
import linkedin from '../../assets/icon/linkedin.svg';
import email from '../../assets/icon/gmail.svg';

const ContactPage = () => {
  return (
    <>
      <Header />
      <Container>
        <InnerContainer>
          {/* <Title>Contact</Title> */}
          {/* <div>
            <ProfileImg src={contact} />
          </div> */}
          <ContactContainer>
            <IconContainer>
              <a href='https://github.com/sway3' target='_blank'>
                <IconButton>
                  <Icon src={github} />
                </IconButton>
              </a>
              <a
                href='https://www.linkedin.com/in/seungwoo-kim-5534b6274/'
                target='_blank'
              >
                <IconButton>
                  <Icon src={linkedin} />
                </IconButton>
              </a>
              <IconButton>
                <Icon src={email} />
              </IconButton>
            </IconContainer>
          </ContactContainer>
          <Description>
            I am available in GitHub, LinkedIn and E-mail.
          </Description>
          <Description>
            Feel free to explore my profiles and contact ;)
          </Description>
        </InnerContainer>
      </Container>
    </>
  );
};

export default ContactPage;

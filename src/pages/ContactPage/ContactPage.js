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
          <Title>Contact</Title>
          <Description>
            I am available in GitHub, LinkedIn and E-mail.
          </Description>
          <Description>
            Feel free to explore my profiles and contact ;)
          </Description>
          <ContactContainer>
            <IconContainer>
              <IconButton>
                <Icon src={github} />
              </IconButton>
              <IconButton>
                <Icon src={linkedin} />
              </IconButton>
              <IconButton>
                <Icon src={email} />
              </IconButton>
            </IconContainer>
          </ContactContainer>
        </InnerContainer>
        <div>
          <ProfileImg src={contact} />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;

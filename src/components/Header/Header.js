import styled from 'styled-components';
import { HeaderContainer, Title, TitleLink, Nav, Li, A } from './style';

const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>
          <TitleLink href='/'>seung.</TitleLink>
        </Title>
        <Nav>
          <Li>
            <A href='#'>about</A>
          </Li>
          <Li>
            <A href='#'>projects</A>
          </Li>
          <Li>
            <A href='/contact'>contact</A>
          </Li>
        </Nav>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

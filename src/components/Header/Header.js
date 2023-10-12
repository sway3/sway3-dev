import styled from 'styled-components';
import { HeaderContainer, Title, Nav, Li, A } from './style';

const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 1000;
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>seung</Title>
        <Nav>
          <Li>
            <A href='#'>about</A>
          </Li>
          <Li>
            <A href='#'>projects</A>
          </Li>
          <Li>
            <A href='#'>contact</A>
          </Li>
        </Nav>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

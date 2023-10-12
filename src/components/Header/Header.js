import { HeaderContainer, Title, Nav, Li, A } from './style';

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;

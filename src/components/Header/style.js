import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 40px;
`;

export const Title = styled.h1`
  color: #000;
  font-weight: 900;
  font-size: 40px;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
`;

export const Li = styled.li`
  margin: 0 20px 0 0;
`;

export const A = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 300;
`;

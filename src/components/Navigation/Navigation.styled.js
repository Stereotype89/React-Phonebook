import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;

  padding-left: 450px;
  padding-right: 450px;

  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
`;

export const Loader = styled.p`
  margin-top: 30px;
  font-size: 26px;
  font-weight: 700;
`;

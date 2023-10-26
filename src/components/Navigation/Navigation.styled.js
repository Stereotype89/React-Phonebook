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
  background: linear-gradient(
    180deg,
    rgba(0, 116, 255, 1) 0%,
    rgba(0, 255, 128, 0.5775560224089635) 100%
  );
  box-shadow: 0px 0px 5px black;
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
  font-size: 20px;
  cursor: pointer;
  color: black;
  transition-duration: 350ms;
  color: black;

  &:active,
  &:hover {
    color: var(--global-white-color);
  }
`;

export const Loader = styled.p`
  margin-top: 30px;
  font-size: 26px;
  font-weight: 700;
`;

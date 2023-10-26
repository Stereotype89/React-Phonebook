import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition-duration: 350ms;
  color: black;

  &:active,
  &:hover {
    color: var(--global-white-color);
  }
`;

import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: var(--footer);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const FooterText = styled.p`
  font-weight: 300;
  color: var(--global-white-color);
  transition-duration: 250ms;

  &:hover {
    color: var(--global-black-color);
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: var(--global-white-color);
  transition-duration: 250ms;

  &:hover {
    color: var(--global-black-color);
  }
`;

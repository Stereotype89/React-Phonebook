import styled from 'styled-components';

export const RegistrationPageContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border: 1px solid var(--global-gray-color);
  border-radius: 5px;
`;

export const RegistrationPageHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RegistrationFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--global-black-color);
`;

export const RegistrationFormInput = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border: none;
  border-radius: 15px;
  box-shadow: var(--input-box-shadow);
  transition-duration: 250ms;
  border-color: var(--input-active-color);

  &:focus {
    outline: 1px solid var(--global-green-color);
    background-color: var(--input-active-color);
  }
`;

export const RegistrationFormSubmitButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: var(--global-white-color);
  border: none;
  border-radius: 5px;
  box-shadow: var(--input-box-shadow);
  cursor: pointer;
  transition-duration: 250ms;

  &:hover {
    color: white;
    background-color: var(--button-color);
  }
  &:active {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2) inset;
  }
`;

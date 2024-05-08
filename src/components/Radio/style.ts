import styled from "styled-components";

export const StyledRadio = styled.input`
  margin-right: 5px;
  appearance: none;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:checked::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray8C};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray8C};
`;

import React from 'react';
import styled from 'styled-components';
import { IInput } from './input.types';
import Arrow from 'assets/arrow.svg';

const Container = styled.div`
  position: relative;
`;

const IconContainer = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const InputComponent = styled.input`
  padding: 0.75rem 3rem 0.75rem 1rem;
  width: 100%;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  border: none;
  &:focus {
    outline: 3px solid #588157;
  }
`;

const Input: React.FC<IInput> = ({ onChange, placeholder }) => {
  return (
    <Container>
      <IconContainer role="button">
        <Icon src={Arrow} alt="No icon" />
      </IconContainer>
      <InputComponent
        onChange={onChange}
        placeholder={placeholder}
        aria-label="number-input"
      />
    </Container>
  );
};

export default Input;

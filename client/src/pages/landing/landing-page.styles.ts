import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const SpacingContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding: 1rem;
  width: 100%;
`;
const RomanNumeralContainer = styled.div`
  background-color: #f1fcde;
  border-radius: 0.25rem;
  position: relative;
  padding: 1rem;
  margin-top: 0.5rem;
`;
const InnerContainer = styled.div`
  display: flex;
  background-color: #f5f5f7;
  flex: 0.8;
  background: linear-gradient(-135deg, #a3b18a 5px, transparent 0) 0 5px,
    linear-gradient(135deg, #a3b18a 5px, #fff 0) 0 5px;
  background-color: #a3b18a;
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 10px 10px;
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
const LogoHeading = styled.h1`
  margin: 0;
  letter-spacing: 3px;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 1rem;
`;
const RomanNumeralHeading = styled.h1`
  font-size: 1.5rem;
  color: #222222;
  margin: 0;
`;
const RomanNumeralText = styled.p`
  word-wrap: break-word;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;
const Form = styled.form`
  margin-top: 2rem;
`;
const CopyBtn = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #a3b18a;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 12px;
  font-weight: 600;
`;

export {
  Container,
  SpacingContainer,
  InnerContainer,
  LoaderContainer,
  LogoHeading,
  RomanNumeralHeading,
  RomanNumeralText,
  Form,
  CopyBtn,
  RomanNumeralContainer,
};

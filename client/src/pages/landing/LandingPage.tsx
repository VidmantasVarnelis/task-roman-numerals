import React, { useEffect } from 'react';
import { Input } from 'components';
import { useLanding } from './hooks/use-landing.hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PuffLoader } from 'react-spinners';
import {
  Container,
  LogoHeading,
  InnerContainer,
  SpacingContainer,
  Form,
  LoaderContainer,
  RomanNumeralHeading,
  RomanNumeralText,
  CopyBtn,
  RomanNumeralContainer,
} from './landing-page.styles';

const LandingPage: React.FC = () => {
  const {
    onSubmit,
    onChange,
    romanLetters,
    isLoading,
    isError,
    onCopy,
    isFulfilled,
  } = useLanding();

  useEffect(() => {
    if (isError) toast.error('Conversion failed!');
    if (isFulfilled) toast.success('Successfully converted number!');
  }, [isFulfilled, isError]);

  return (
    <Container>
      <ToastContainer />
      <LogoHeading>Roman Numeral Converter</LogoHeading>
      <InnerContainer>
        <SpacingContainer>
          <Form onSubmit={onSubmit} role="form">
            <Input onChange={onChange} placeholder="Type a number" />
          </Form>
          {isLoading ? (
            <LoaderContainer>
              <PuffLoader size={100} />
            </LoaderContainer>
          ) : (
            romanLetters && (
              <RomanNumeralContainer>
                <RomanNumeralHeading>Roman numeral:</RomanNumeralHeading>
                <RomanNumeralText data-testid="heading" onClick={onCopy}>
                  <CopyBtn>Copy</CopyBtn>
                  {romanLetters}
                </RomanNumeralText>
              </RomanNumeralContainer>
            )
          )}
        </SpacingContainer>
      </InnerContainer>
    </Container>
  );
};

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff5e6;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ff8c00;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${slideUp} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ff8c00;
  margin-bottom: 3rem;
  text-align: center;
  animation: ${slideUp} 1s ease-out 0.2s backwards;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  background-color: #ff8c00;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: ${slideUp} 1s ease-out 0.4s backwards;

  &:hover {
    background-color: #ffa500;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 140, 0, 0.4);
  }
`;

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>
      <Title>Welcome to Talabat</Title>
      <Subtitle>Your one-stop solution for food delivery and more!</Subtitle>
      <ButtonContainer>
        <StyledLink to="/customer">I'm a Customer</StyledLink>
        <StyledLink to="/driver">I'm a Driver</StyledLink>
        <StyledLink to="/restaurant">I'm a Restaurant</StyledLink>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default LandingPage;

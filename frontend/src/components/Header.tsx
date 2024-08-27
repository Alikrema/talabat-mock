import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:active::after {
    animation: ripple 0.4s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover span {
    color: #ffd700; // Gold color for emphasis
    text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
  }
`;

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: auto;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>talabat</Logo>
      <HomeLink to="/">Home</HomeLink>
      <NavLinks>
        <NavLink href="#">
          <span>Donations</span>
        </NavLink>
        <NavLink href="#">Offers</NavLink>
        <NavLink href="#">Become a partner</NavLink>
        <NavLink href="#">العربية</NavLink>
        <NavLink href="#">My Account</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;

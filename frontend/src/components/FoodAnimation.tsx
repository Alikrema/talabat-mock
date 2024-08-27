import React from "react";
import styled, { keyframes } from "styled-components";

const flyUpAnimation = keyframes`
  0% {
    transform: translateY(100vh) scale(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1) rotate(360deg);
    opacity: 0;
  }
`;

const FoodContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const FoodEmoji = styled.div<{ delay: number; duration: number; left: number }>`
  position: absolute;
  bottom: -100px;
  font-size: 48px; // Increased from 24px to 48px
  animation: ${flyUpAnimation} ${(props) => props.duration}s ease-in-out
    ${(props) => props.delay}s infinite;
  left: ${(props) => props.left}%;
  transform: scale(0);
`;

const foodEmojis = ["🍕", "🍔", "🌮", "🍣", "🍜", "🍝", "🍱", "🍗", "🥗", "🍰"];

const FoodAnimation: React.FC = () => {
  const foods = Array.from({ length: 15 }, (_, i) => (
    <FoodEmoji
      key={i}
      delay={Math.random() * 3} // Increased from 2 to 3 for more spread
      duration={8 + Math.random() * 4} // Increased from 3-5s to 8-12s
      left={Math.random() * 100}
    >
      {foodEmojis[Math.floor(Math.random() * foodEmojis.length)]}
    </FoodEmoji>
  ));

  return <FoodContainer>{foods}</FoodContainer>;
};

export default FoodAnimation;

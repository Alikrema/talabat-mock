import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg) translateX(250px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(250px) rotate(-360deg);
  }
`;

const CarouselContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  pointer-events: none;
  z-index: 9999;
`;

const FoodItem = styled.div<{ delay: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 48px;
  animation: ${spin} 5s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const foodEmojis = [
  "🍕",
  "🍔",
  "🌮",
  "🍣",
  "🍜",
  "🍝",
  "🍱",
  "🍗",
  "🥗",
  "🍰",
  "🍖",
  "🥩",
  "🌯",
  "🥙",
  "🍟",
];

const FoodCarousel: React.FC = () => {
  return (
    <CarouselContainer>
      {foodEmojis.map((emoji, index) => (
        <FoodItem key={index} delay={index * 0.2}>
          {emoji}
        </FoodItem>
      ))}
    </CarouselContainer>
  );
};

export default FoodCarousel;

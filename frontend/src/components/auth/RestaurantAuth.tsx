import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import FoodAnimation from "../FoodAnimation";
import FoodCarousel from "../FoodCarousel";

const RestaurantAuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff5e6;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: #ff8c00;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ff8c00;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #ff8c00;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffa500;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const ToggleLink = styled.span`
  color: #ff8c00;
  cursor: pointer;
  text-decoration: underline;
`;

const RestaurantAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setShowAnimation(true);
      setShowCarousel(true);
      setTimeout(() => {
        setShowAnimation(false);
        setShowCarousel(false);
      }, 10000); // Hide animations after 10 seconds
    } catch (error) {
      console.error("Error:", error);
      // TODO: Handle error (e.g., show error message to user)
    }
  };

  return (
    <RestaurantAuthContainer>
      <Title>{isLogin ? "Restaurant Login" : "Restaurant Sign Up"}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Category (comma-separated)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Owner Name"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </>
        )}
        <Button type="submit">{isLogin ? "Login" : "Sign Up"}</Button>
      </Form>
      <ToggleText>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <ToggleLink onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </ToggleLink>
      </ToggleText>
      {showAnimation && <FoodAnimation />}
      {showCarousel && <FoodCarousel />}
    </RestaurantAuthContainer>
  );
};

export default RestaurantAuth;

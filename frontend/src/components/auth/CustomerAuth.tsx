import React, { useState } from "react";
import styled from "styled-components";

const CustomerAuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: #4169e1;
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
  border: 1px solid #4169e1;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4169e1;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e90ff;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const ToggleLink = styled.span`
  color: #4169e1;
  cursor: pointer;
  text-decoration: underline;
`;

const CustomerAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Submitting:", {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    });
  };

  return (
    <CustomerAuthContainer>
      <Title>{isLogin ? "Customer Login" : "Customer Sign Up"}</Title>
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
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
    </CustomerAuthContainer>
  );
};

export default CustomerAuth;

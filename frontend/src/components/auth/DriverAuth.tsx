import React, { useState } from "react";
import styled from "styled-components";

const DriverAuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  color: #2e8b57;
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
  border: 1px solid #2e8b57;
  border-radius: 4px;
`;

const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #2e8b57;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #2e8b57;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3cb371;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const ToggleLink = styled.span`
  color: #2e8b57;
  cursor: pointer;
  text-decoration: underline;
`;

const DriverAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [nationalId, setNationalId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Submitting:", {
      email,
      password,
      firstName,
      lastName,
      age,
      vehicle,
      nationalId,
    });
  };

  return (
    <DriverAuthContainer>
      <Title>{isLogin ? "Driver Login" : "Driver Sign Up"}</Title>
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
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="18"
              max="65"
            />
            <Select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              required
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bicycle">Bicycle</option>
              <option value="on_foot">On Foot</option>
            </Select>
            <Input
              type="text"
              placeholder="National ID"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              required
              pattern="\d{14}"
              title="National ID must be 14 digits"
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
    </DriverAuthContainer>
  );
};

export default DriverAuth;

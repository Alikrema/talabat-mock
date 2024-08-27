import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import CustomerAuth from "./components/auth/CustomerAuth";
import DriverAuth from "./components/auth/DriverAuth";
import RestaurantAuth from "./components/auth/RestaurantAuth";
import LandingPage from "./components/LandingPage";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer" element={<CustomerAuth />} />
          <Route path="/driver" element={<DriverAuth />} />
          <Route path="/restaurant" element={<RestaurantAuth />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;

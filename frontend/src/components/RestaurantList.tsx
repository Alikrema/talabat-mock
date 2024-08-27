import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SortOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SortOption = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 1rem;
  padding: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const RestaurantCard = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
`;

const RestaurantLogo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const RestaurantName = styled.h3`
  margin: 0.5rem 0;
`;

const RestaurantInfo = styled.p`
  margin: 0.25rem 0;
  font-size: 0.9rem;
`;

const RestaurantList: React.FC = () => {
  return (
    <ListContainer>
      <Title>
        Delivery from Local Restaurants Near Me in Dokki - El Morour Area
      </Title>
      <SortOptions>
        <span>SORT BY:</span>
        <SortOption>Recommended</SortOption>
        <SortOption>Alphabetic</SortOption>
        <SortOption>Delivery Charges</SortOption>
        <SortOption>Delivery Time</SortOption>
        <SortOption>Minimum Order Amount</SortOption>
        <SortOption>Rating</SortOption>
      </SortOptions>
      <RestaurantGrid>
        {/* Add restaurant cards here */}
        <RestaurantCard>
          <RestaurantLogo
            src="https://via.placeholder.com/150"
            alt="Restaurant Logo"
          />
          <RestaurantName>Smiley's Grill</RestaurantName>
          <RestaurantInfo>Sandwiches, Burgers, Fast Food</RestaurantInfo>
          <RestaurantInfo>Amazing</RestaurantInfo>
          <RestaurantInfo>
            Within 25 mins Delivery: Free Min: 20.00
          </RestaurantInfo>
        </RestaurantCard>
        {/* Add more restaurant cards as needed */}
      </RestaurantGrid>
    </ListContainer>
  );
};

export default RestaurantList;

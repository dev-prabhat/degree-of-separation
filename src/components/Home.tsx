import React from "react";
import styled from "styled-components";

const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CustomHeading = styled.h1`
  font-size: 3rem;
`;

const CustomDescription = styled.p`
  width: 70%;
  text-align: center;
  font-size: 2rem;
`;

export const Home = () => {
  return (
    <CustomContainer>
      <CustomHeading>Find the degrees of separation</CustomHeading>
      <CustomDescription>
        It is said that all people on average are six, or fewer, social
        connections away from each other.
      </CustomDescription>
    </CustomContainer>
  );
};

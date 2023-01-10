import React from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

const CustomHeading = styled.h1`
  text-align: center;
`;

const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomButton = styled(Button)`
  cursor: pointer;
`;

const CustomSelect = styled(Form.Select)`
  width: 20%;
  padding: 0.5rem;
  margin: 0 1rem;
`;

export const SetRelationShip = () => {
  return (
    <div>
      <CustomHeading>Set RelationShip</CustomHeading>
      <CustomContainer>
        <CustomSelect>
          <option>Default select</option>
        </CustomSelect>
        <CustomSelect>
          <option>Default select</option>
        </CustomSelect>
        <CustomButton>Set</CustomButton>
      </CustomContainer>
    </div>
  );
};

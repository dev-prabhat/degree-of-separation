import React from "react";
import styled from "styled-components";
import { Button, Form, InputGroup } from "react-bootstrap";

const CustomHeading = styled.h1`
  text-align: center;
`;

const CustomInputGroup = styled(InputGroup)`
  display: flex;
  justify-content: center;
`;

const CustomFormControl = styled(Form.Control)`
  width: 40%;
  padding: 0.5rem;
`;

const CustomButton = styled(Button)`
  cursor: pointer;
`;

export const AddPeople = () => {
  return (
    <div>
      <CustomHeading>Add Name</CustomHeading>
      <CustomInputGroup className="mb-3">
        <CustomFormControl
          placeholder="enter name"
          aria-label="Add Name"
          aria-describedby="basic-addon1"
        />
        <CustomButton variant="primary">Add</CustomButton>
      </CustomInputGroup>
    </div>
  );
};

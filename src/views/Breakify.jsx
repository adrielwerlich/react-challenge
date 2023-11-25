import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormContainer,
  NameInput,
  HighlightContainer,
  Column,
  Row,
  SubmitButton,
} from "./styleds";
import { setName } from "../store/actions";

import HighlightedNames from "../components/Highlight";

function Breakify() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  const getHighlight = (e) => {
    e.preventDefault();
    dispatch(setName(form.firstName, form.lastName));
  }

  useEffect(() => {
    dispatch(setName(form.firstName, form.lastName));
  }, [form]);


  const handleKeyUp = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContainer className="form">
      <HighlightContainer>
        <HighlightedNames />
      </HighlightContainer>
      <form id="highlight-letters">
        <Row>
          <Column>
            <label htmlFor="firstName">First Name:</label>

            <NameInput
              type="text"
              id="firstName"
              name="firstName"
              required
              onKeyUp={handleKeyUp}
            />
          </Column>
          <Column>
            <label htmlFor="lastName">Last Name:</label>
            <NameInput
              type="text"
              id="lastName"
              name="lastName"
              required
              onKeyUp={handleKeyUp}
            />
          </Column>
        </Row>
        <br />
        <SubmitButton onClick={(event) => getHighlight(event)}>Breakify</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default Breakify;

import React from "react";
import styled from "styled-components";
import axios from "axios";
import AuthService from "../services/auth.service";
const API_URL = "http://162.19.65.77:8080/users/delete";

function Delete(props) {
  const handleDelete = async () => {
    await axios
      .delete(API_URL, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          AuthService.logout();
        }
      });
  };
  return (
    <Container>
      <Title>
        <h2>Sei sicuro di voler cancellare l'utente?</h2>
      </Title>
      <ButtonWrapper>
        <ButtonYes onClick={handleDelete}>Si</ButtonYes>
        <ButtonNo onClick={props.deleteCB}>No</ButtonNo>
      </ButtonWrapper>
    </Container>
  );
}

export default Delete;

const Container = styled.div``;

const Title = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonNo = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1.2rem;
`;

const ButtonYes = styled(ButtonNo)`
  background-color: #f44336;
  color: white;
`;

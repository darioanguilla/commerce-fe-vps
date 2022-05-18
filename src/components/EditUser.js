import React from "react";
import styled from "styled-components";
import axios from "axios";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
const API_URL = "http://162.19.65.77:8080/users/update";

function EditUser(props) {
  let d = new Date(props.user.birthday);
  const navigate = useNavigate();

  
  function handleSubmit() {
    event.preventDefault();

    const data = new FormData(document.getElementById("form"));

    const user = Object.fromEntries(data.entries());
    
    console.log({ user });

    const headers = { 
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
      'content-type': 'application/json'
    };

     axios.put(API_URL , JSON.stringify(user), { headers }).then(window.location.reload());
  }
  
  return (
    <Container>
      <Title>
        <h2>Modifica dati utente: {props.user.username}</h2>
      </Title>
      <Form id="form">
        <Label>
          Nome:
          <input name="first_name" type="text" defaultValue={props.user.first_name} />
        </Label>
        <Label>
          Cognome:
          <input name="last_name" type="text" defaultValue={props.user.last_name} />
        </Label>
        <Label>
          Email:
          <input name="email" type="email" defaultValue={props.user.email} />
        </Label>
        <Label>
          Data di Nascita:
          <input name="birthday" type="date" defaultValue={!(props.user.birthday===null)?props.user.birthday.slice(0, 10):null} />
        </Label>
        <Label>
          Sesso:
          <Select name="sex" selected={props.user.sex}>
            <option value="M">M</option>
            <option value="F">F</option>
          </Select>
        </Label>
        <Label>
          Telefono:
          <input name="phone" type="text" defaultValue={props.user.phone} />
        </Label>
      </Form>
      <ButtonWrapper>
        <ButtonYes
          onClick={handleSubmit}
        >
          Salva
        </ButtonYes>
        <ButtonNo onClick={props.editCB}>Annulla</ButtonNo>
      </ButtonWrapper>
    </Container>
  );
}

export default EditUser;

const Container = styled.div`
  border: 1px solid black;
  width: 70%;
  margin: 0 50px;
  padding: 0 20px;
`;

const Title = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 8px 8px;
  input {
    margin-left: 8px;
  }
`;

const Select = styled.select`
  margin: 0 8px;
`;

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
  background-color: green;
  color: white;
`;

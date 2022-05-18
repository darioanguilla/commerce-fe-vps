import React, { useState, useEffect, useCallback } from "react";

import Delete from "./Delete";
import EditUser from "./EditUser";

function User(props) {
  let d = new Date(props.user.birthday);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    if (showEdit) setShowEdit(!showEdit);
    setShowDelete(!showDelete);
  };

  const handleEdit = () => {
    if (showDelete) setShowDelete(!showDelete);
    setShowEdit(!showEdit);
  };

  const deleteCB = useCallback(() => {
    setShowDelete(!showDelete);
  }, [showDelete]);

  const editCB = useCallback(() => {
    setShowEdit(!showEdit);
  }, [showEdit]);

  useEffect(() => {
    console.log(showDelete);
  }, [showDelete]);

  return (
    <div className="user-container">
      <div className="user-card">
        <h1 className="username">{props.user.username}</h1>
        <p className="first-name">Nome: {props.user.first_name}</p>
        <p className="last-name">Cognome: {props.user.last_name}</p>
        <p className="email">Email: {props.user.email}</p>
        <p className="birthday">
          Data di nascita: {d.toLocaleDateString("it-IT")}
        </p>
        <p className="sex">
          Sesso: {props.user.sex === "M" ? "Maschile" : "Femminile"}
        </p>
        <p className="phone">Numero di telefono: {props.user.phone}</p>
        <button onClick={handleEdit}>Modifica</button>
        <button className="delete" onClick={handleDelete}>
          Cancella
        </button>
      </div>
      {showDelete ? <Delete deleteCB={deleteCB} /> : ""}
      {showEdit ? <EditUser user={props.user} editCB={editCB} /> : ""}
    </div>
  );
}

export default User;

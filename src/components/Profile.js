import React from 'react'
import axios from 'axios';
import User from "./User";

import  { useState } from 'react'

function Profile() {
  const [user, setUser] = useState([])


  React.useEffect(() => {
		userInfo();
	}, []);

  const userInfo = async () => {
    await axios
        .get("http://162.19.65.77:8080/users/details", {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
          }
        })
        .then((response) => {
          console.log(response);
          setUser(response.data);
        })
  }
  return (
    <>
      <User user={user}/>
    </>
  );
}

export default Profile
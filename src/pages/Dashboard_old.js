import React, { useContext } from "react";
import styled from "styled-components";
import Login from "../components/Login";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import AuthContext from "../context/AuthContext";

function Dashboard(props) {
  const {success} =  useContext(AuthContext);

  return (
    <div>
		<Navbar numbOfCartItems={props.numbOfCartItems} />
    
		{success?
      <Layout>
        <Sidebar/>
        <Users />
      </Layout>:
        <Login/>}
	</div>
  );
}

export default Dashboard;

const Layout = styled.div`
  display: flex;
  padding: 20px;
  gap: 50px;
`


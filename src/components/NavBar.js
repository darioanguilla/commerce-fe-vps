import React, { useEffect, useState, useCallback } from "react";
import { FaBars, FaFacebookF, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import AuthContext from "../context/AuthContext";
import AuthService from "../services/auth.service";
import CartIcon from "./CartIcon";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [userLogged, setUserLogged] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const openBurger = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleLogout = () => {
    AuthService.logout();
  };

  useEffect(() => {
    setUserLogged(AuthService.getCurrentUser());
  }, [userLogged]);

  return (
    <Nav>
      <LeftContainer>
        <FaFacebookF color="white" size="1.8em" />
        <NavLink to="/"> Home </NavLink>
        {userLogged ? (
          <NavLink to="/dashboard/profile"> Dashboard </NavLink>
        ) : (
          ""
        )}
      </LeftContainer>
      <MidContainer>
        <NavSearch
          id="search"
          type="search"
          onChange={(e) => props.setFilter(e.target.value)}
          placeholder="Ricerca prodotto"
        ></NavSearch>
        <NavFaSearch color="white" size="1.8em" />
      </MidContainer>
      <RightContainer>
        {userLogged ? (
          <NavLink to="/" onClick={handleLogout}>
            Logout <br />
            <span style={{ color: "red" }}>{userLogged}</span>
          </NavLink>
        ) : (
          <NavLink to="/login">Login </NavLink>
        )}

        <NavCart to="/cart">
          <CartIcon numbOfCartItems={props.numbOfCartItems} />
        </NavCart>

        <Burger open={open} openBurger={openBurger} />
      </RightContainer>
      <BurgerMenu open={open} openBurger={openBurger} />
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background: #202020;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
`;
const LeftContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  
`;
const MidContainer = styled.nav`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: space-between;
  
`;
const RightContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  
`;

const NavLink = styled(Link)`
  color: azure;
  padding: 2px 5px;
  margin: 0 20px;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    background-color: black;
    color: #fac136;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSearch = styled.input`
  height: 50%;

  margin-left: 20px;
  padding: 10px;
  font-size: 1.2em;
  width: 100%;

  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`;

const NavCart = styled(Link)`
  margin: 0 20px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavFaSearch = styled(FaSearch)`
  margin-left: 4px;
  height: 50%;
`;

const NavHambBars = styled(FaBars)`
  color: white;
  font-size: 1.5em;
  margin: 0 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

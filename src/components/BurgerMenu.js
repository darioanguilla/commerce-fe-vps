import React from "react";
import styled from "styled-components";

const BurgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span>aaa</span>
      </a>
      <a href="/">
        <span>aaa</span>
      </a>
      <a href="/">
        <span>aaa</span>
      </a>
    </StyledMenu>
  );
};

export default BurgerMenu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3 ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  &:hover {
    color: red;
  }
`;

import React from "react";
import Navbar from "../components/NavBar";
import Products from "../components/Products";
import Cart from "../components/Cart";
import useProducts from "../hooks/useProducts";
import styled from 'styled-components'

function Home(props) {
  const { products, setFilter, loading } = useProducts();

  return (
    <Page>
      <Navbar numbOfCartItems={props.numbOfCartItems} setFilter={setFilter} />
      <div className="main">
        <div className="products-wrapper">
          <Products products={products} loading={loading} onAdd={props.onAdd} />
        </div>
        <div className="cart-wrapper">
          <Cart
            cartItems={props.cartItems}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        </div>
      </div>
    </Page>
  );
}

export default Home;


const Page = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
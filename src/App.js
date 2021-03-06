import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";
import { AuthProvider } from "./context/AuthContext";
import ProductPage from "./pages/ProductPage";
import Users from "./components/Users";
import { Dashboard } from "./components/Dashboard";
import Products from "./components/Products";
import Profile from "./components/Profile";
import useProducts from "./hooks/useProducts";
import { Orders } from "./components/Orders";
import { Customers } from "./components/Customers";

function App() {
  const { cartItems, numbOfCartItems, onAdd, onRemove } = useCart();
  const { products, setFilter, loading } = useProducts();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                numbOfCartItems={numbOfCartItems}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<LoginPage numbOfCartItems={numbOfCartItems} />}
          />
          <Route
            path="/signup"
            element={<RegisterPage numbOfCartItems={numbOfCartItems} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                numbOfCartItems={numbOfCartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          {/* <Route
            path="/dashboard"
            element={<Dashboard numbOfCartItems={numbOfCartItems} />}
          ></Route> */}

          <Route path="/product/:id" element={<ProductPage />}></Route>

          <Route
            path="/dashboard"
            element={
              <Dashboard
                numbOfCartItems={numbOfCartItems}
                setFilter={setFilter}
                loading={loading}
              />
            }
          >
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products products={products} />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

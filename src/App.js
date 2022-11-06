import Main from "./components/main/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { useState } from "react";
import Cart from "./components/main/Cart";
import Dashboard from "./components/private-route/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Login from "./components/private-route/Login";

export default function App() {
  const [count, setCount] = useState(0);
  const [itemInCart, setItemInCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AppLayout count={count} setCount={setCount}>
                <Main
                  count={count}
                  setCount={setCount}
                  itemInCart={itemInCart}
                  setItemInCart={setItemInCart}
                />
              </AppLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <AppLayout count={count} setCount={setCount}>
                <Cart itemInCart={itemInCart} setItemInCart={setItemInCart} />
              </AppLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              >
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

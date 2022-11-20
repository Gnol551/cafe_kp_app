import Main from "./components/main/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { useState } from "react";
import Cart from "./components/main/Cart";
import Dashboard from "./components/private-route/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Login from "./components/private-route/Login";
import Products from "./components/admin/products/Products";
import PurchaseOrdersList from "./components/admin/purchase-orders/PurchaseOrdersList";

export default function App() {
  const [count, setCount] = useState(0);
  const [itemInCart, setItemInCart] = useState([]);

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
                <Cart
                  itemInCart={itemInCart}
                  setItemInCart={setItemInCart}
                  count={count}
                  setCount={setCount}
                />
              </AppLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/products"
            element={
              <PrivateRoute>
                <Dashboard>
                  <Products />
                </Dashboard>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/purchase-orders"
            element={
              <PrivateRoute>
                <Dashboard>
                  <PurchaseOrdersList />
                </Dashboard>
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

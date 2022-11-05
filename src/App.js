import Main from "./components/main/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/cart" element={<>Cart</>} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AllCooksMap from "./pages/AllCooksMap/AllCooksMap";
import CooksLocation from "./pages/CooksLocation/CooksLocation";
import Cart from "./components/Cart/Cart";
import CooksDetailsPage from "./pages/CooksDetailsPage/CooksDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/cooks/:cooksId" element={<CooksDetailsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allCooksMap" element={<AllCooksMap />} />
        <Route path="/cooksLocation" element={<CooksLocation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

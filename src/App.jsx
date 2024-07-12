import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import AllCooksMap from "./pages/AllCooksMap/AllCooksMap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/allCooksMap" element={<AllCooksMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

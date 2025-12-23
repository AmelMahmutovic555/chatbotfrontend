import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

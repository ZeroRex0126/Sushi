import "./App.css";
import { Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { ContactUsPage, MenuPage, HomePage, About } from "./Pages";

function App() {
  return (
    <>
      <img src="/img/waves.png" alt="" className="background" />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ContactUs" element={<ContactUsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;

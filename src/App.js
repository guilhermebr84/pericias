import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton/index";

import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavbarComponent />
        <Routes path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='clients' element={<Clients />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <ScrollButton />
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

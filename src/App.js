import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import NavbarComponent from "./components/NavbarComponent";

import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
const container = document.getElementById("root");

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes path='/'>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='clients' element={<Clients />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

const root = createRoot(container);
root.render(<App />);

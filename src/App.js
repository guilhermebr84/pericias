import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
    <Navbar />
    {/* <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newbet" element={<NewBet />} />
        <Route path="/readbet" element={<ReadBet />} />
        <Route path="/readapi" element={<ReadAPI />} />
        <Route path="/update/:id" element={<UpdateBet />} />
        <Route path="/delete/:id" element={<DeleteBet />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div> */}
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

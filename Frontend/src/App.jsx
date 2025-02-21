import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <main className="bg-background ">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;

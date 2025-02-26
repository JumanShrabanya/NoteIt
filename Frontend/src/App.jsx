import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginBox from "./components/LoginBox";
import { ShowLoginCardProvider } from "./contexts/ShowLoginCard";

const App = () => {
  return (
    <ShowLoginCardProvider>
      <main className="bg-background">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </ShowLoginCardProvider>
  );
};

export default App;

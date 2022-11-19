import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LeaderBoard />} />
        <Route path="/play" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

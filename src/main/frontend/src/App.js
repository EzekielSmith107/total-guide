import React from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Guidelines from "./components/guidelines/Guidelines";
import Cheatsheet from "./components/cheatsheet/Cheatsheet";
import Generator from "./components/generator/Generator";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Guidelines />
      <Cheatsheet />
      <Generator />
    </div>
  );
}

export default App;

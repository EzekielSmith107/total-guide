import React from "react";

import NavigationFunc from "./components/navigationFunc/NavigationFunc";
import Home from "./components/home/Home";
import Guidelines from "./components/guidelines/Guidelines";
import Cheatsheet from "./components/cheatsheet/Cheatsheet";
import Showcase from "./components/showcase/Showcase";
import Generator from "./components/generator/Generator";
import Resources from "./components/resources/Resources";

function App() {
  return (
    <div>
      <NavigationFunc />
      <Home />
      <Guidelines />
      <Cheatsheet />
      <Showcase />
      <Generator />
      <Resources />
    </div>
  );
}

export default App;

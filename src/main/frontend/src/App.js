import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Guidelines from "./components/guidelines/Guidelines";
import Cheatsheet from "./components/cheatsheet/Cheatsheet";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Guidelines />
      <Cheatsheet />
    </div>
  );
}

export default App;

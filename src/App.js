import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { FlashCard } from "./components/FlashCard";

function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./Movies";

const movies = [
  {
    id: 1,
    name: "Best movie ever!!1",
    isLiked: true,
  },
  {
    id: 2,
    name: "Hulky Hulk",
    isLiked: true,
  },
  {
    id: 3,
    name: "Ninja Coder",
    isLiked: false,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default App;

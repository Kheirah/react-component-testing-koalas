import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./Movies";

const movies = [
  {
    id: 1,
    title: "Koala-ty Time: The Ultimate Chill",
    isLiked: true,
  },
  {
    id: 2,
    title: "Jurassic Bark: Rise of the Koalas",
    isLiked: true,
  },
  {
    id: 3,
    title: "Koala-fied to Party",
    isLiked: false,
  },
  {
    id: 4,
    title: "Koala Wars: The Eucalyptus Strikes Back",
    isLiked: false,
  },
];

function App() {
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
      <h1>React Component Testing</h1>
      <div className="card">
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default App;

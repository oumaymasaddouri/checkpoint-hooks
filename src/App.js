import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { moviesData } from "./constants/Data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const handleAdd = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <div className="App">
      <Navbar setText={setText} setRate={setRate} rate={rate} />
      <AddMovie handleAdd={handleAdd} />
      <MovieList movies={movies} text={text} rate={rate} />
      <Footer />
    </div>
  );
}

export default App;

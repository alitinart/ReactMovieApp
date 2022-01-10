import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Home/Movies/Movies";
import SearchResult from "./Home/Search/SearchResults/SearchResults";
import MovieDetails from "./Movie/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          pages={[
            { name: "Home", anchor: "/" },
            { name: "Donate", anchor: "/donate" },
            { name: "Info", anchor: "/info" },
          ]}
        ></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
          <Route
            path="/searchResults/:searchValue"
            element={<SearchResult />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

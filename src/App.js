import { Route } from "react-router-dom";
import { BrowserRouter, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchResult from "./Home/Search/SearchResults/SearchResults";
import MovieDetails from "./MovieDetails/MovieDetails";

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
          <Route
            exact
            path="/movie/:movieId"
            element={<MovieDetails />}
          ></Route>
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

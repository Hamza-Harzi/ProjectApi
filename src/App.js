import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Houme from "./component/Houme";
import { Routes } from "react-router-dom";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Houme />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

// const [posts, setPosts] = useState([]);
//   console.log("object :>> ", posts);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setPosts(data);
//       })
//       .catch((err) => {
//         console.log("first", err.message);
//       });
//   }, []);

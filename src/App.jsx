import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/scss/main.scss";
import Books from "./components/Books/Books";
import Control from "./components/Control/Control";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Private from "./private/Private";
import books from "./api/API";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    books.getBooks().then((res) => setData(res));
  }, []);

  books.sendBooks();

  const sendData = () => {
    axios.post("http://localhost:5000/booklist", {
      id: uuidv4(),
      name: "Sherklok",
      author: "Doctor Khandoyir",
      price: "12$",
    });
  };

  const delteDate = () => {
    axios.delete("http://localhost:5000/booklist/1", {});
  };

  const updateDate = () => {
    axios.put(
      "http://localhost:5000/booklist/6220cff9-edba-473e-9b71-8b3b58c9c99c",
      {
        id: uuidv4(),
        name: "Spider Man",
        author: "Movies",
        price: "11$",
      }
    );
  };

  console.log(data);

  return (
    <>
      <button onClick={() => updateDate()} className="btn btn-primary">
        Send
      </button>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Private />}>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/control" element={<Control />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
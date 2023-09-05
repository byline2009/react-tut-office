import { Component } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WrapperLayout from "../pages/WrapperLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Author from "../pages/Author";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<WrapperLayout />}>
              <Route path="/" index element={<Navigate to="/home" />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="blog" element={<Blog />}></Route>
              <Route path="author" element={<Author />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

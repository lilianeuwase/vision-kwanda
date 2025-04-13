import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ScrollToTop from "./components/scrollToTop";
import Gemstones from "./components/gemstones/gemstones";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import Example from "./components/homepage/tbu";
import { Footer } from "./components/footer";
import Services from "./pages/services";
import About from "./pages/about";

function App() {
  return (
    <ChakraProvider value={system} >
    <Router>
    {/* <Header/> */}
    <ScrollToTop>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/view" element={<Example />} />
        </Routes>
      </div>
      </ScrollToTop>
    </Router>
    <Footer/>
    </ChakraProvider>
  );
}

export default App;

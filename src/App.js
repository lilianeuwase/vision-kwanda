import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import ScrollToTop from "./components/scrollToTop";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import Example from "./components/homepage/tbu";
import { Footer } from "./components/footer";
import Services from "./pages/services";
import About from "./pages/about";
import Partners from "./components/partners";
import TeamPage from "./pages/teamPage";
import Minerals from "./components/minerals/minerals";

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
          <Route path="/minerals" element={<Minerals />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/view" element={<Example />} />
        </Routes>
      </div>
      </ScrollToTop>
    </Router>
    <Partners/>
    <Footer/>
    </ChakraProvider>
  );
}

export default App;

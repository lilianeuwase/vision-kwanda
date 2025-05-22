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
import TeamPage from "./pages/teamPage";
import Error404 from "./components/error404";
import Minerals from "./components/minerals/minerals";
import { Maybe } from "./components/unused/maybe";

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
          <Route path="/view" element={<Maybe />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      </ScrollToTop>
    </Router>
    {/* <Partners/> */}
    <Footer/>
    </ChakraProvider>
  );
}

export default App;

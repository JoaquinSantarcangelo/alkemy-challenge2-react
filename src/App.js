import React from "react";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//Layout
import Home from "./components/_containers/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
    </div>
  );
};

export default App;

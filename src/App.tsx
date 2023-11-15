import React from "react";
import Hero from "./components/Hero.tsx";
import Demo from "./components/Demo.tsx";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero></Hero>
        <Demo></Demo>
      </div>
    </main>
  );
};

export default App;

import React from "react";
// @ts-ignore
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex items-center justify-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <span className="logo_text w-28 object-contain">Sumz</span>
        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("https://github.com")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articels with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;

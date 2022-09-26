import React from "react";

import { Hero, About, Services, Testimonials, Contact } from "./Screens";
import { Navbar, Footer } from "./Components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
//import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          {/*<Services /> */}
          {/* <Testimonials /> */}
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

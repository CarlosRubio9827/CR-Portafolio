import React from "react";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import About from "./Components/About/about";
import Work from "./Components/Experience/experience";
import ProjectContainer from "./Components/ProjectContainer/projectContainer";

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Work />
      <ProjectContainer/>
      <Footer />
    </main>
  );
};

export default App;

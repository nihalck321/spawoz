
import React from "react";

import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Career from "./routes/Career";
import Contact from "./routes/Contact";
import GetaQuotes from "./routes/GetaQuotes";
import Industries from "./routes/Industries";
import OurWorks from "./routes/OurWorks";
import Services from "./routes/Services";

// import Nav from "./routes/Navi"

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getaquoets" element={<GetaQuotes />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/ourworks" element={<OurWorks />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;

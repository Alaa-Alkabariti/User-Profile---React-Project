import "./App.css";
import Services from "./Screens/Services";
import Skills from "./Screens/Skills";
import Gallery from "./Screens/Gallery";
import About from "./Screens/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
      <Registration />  */}

      {/* <Layout title="about"></Layout> */}
      {/* <InternalNav /> */}

      <Routes>
        <Route path="/about" element={<About /> } /> 
        {/* <Route path="/" element={<About /> } /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Gallery />  */}
    </>
  );
}

export default App;

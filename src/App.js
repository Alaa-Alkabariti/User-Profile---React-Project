import "./App.css";
import Services from "./Screens/Services";
import Skills from "./Screens/Skills";
import Gallery from "./Screens/Gallery";
import About from "./Screens/About";
import Home from "./Screens/Home/index";
import { Route, Routes } from "react-router-dom";
import Registration from "./Screens/Registration";
import Names from "./Components/Names/en.json";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="registration" element={<Registration />} />
        <Route exact path="registration" element={<Registration />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<About />} />
        <Route exact path="skills" element={<Skills />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="gallery" element={<Gallery />} />
      </Routes>

      {/* <Registration /> */}

      {/* <Layout title="about"></Layout> */}
      {/* <InternalNav /> */}

      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Gallery />  */}
    </>
  );
}

export default App;

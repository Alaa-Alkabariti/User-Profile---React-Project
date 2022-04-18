import "./App.css";
import Services from "./Screens/Services";
import Skills from "./Screens/Skills";
import Gallery from "./Screens/Gallery";
import About from "./Screens/About";
import Home from "./Screens/Home/index";
import { Route, Routes } from "react-router-dom";
import Registration from "./Screens/Registration";
import Names from "./Components/Names/en.json";
import ManageAbout from "./Screens/AdminScreens/ManageAbout";
import ManageSkills from "./Screens/AdminScreens/ManagaeSkills";
import ManageServices from "./Screens/AdminScreens/ManageServices";
import ManageGallery from "./Screens/AdminScreens/GalleryManage";

function App() {
  return (
    <>
      {/* <ManageAbout />  */}
      {/* <ManageSkills />  */}
      {/* <ManageServices /> */}
      <ManageGallery />
      {/*     <Routes>
        <Route exact path="registration" element={<Registration />} />
        <Route exact path="registration" element={<Registration />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<About />} />
        <Route exact path="skills" element={<Skills />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="gallery" element={<Gallery />} />
      </Routes>  */}

      {/* <Registration /> */}
      {/* <Layout title="about"></Layout> */}

      {/* <InternalNav /> */}

      {/* <About />  */}
      {/* <Skills /> */}
      {/* <Services /> */}
      {/* <Gallery />  */}
    </>
  );
}

export default App;

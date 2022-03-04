import "./App.css";
import Names from "../src/Components/Names/en.json";
import Navbar from "./Screens/Home/Navbar";
import Hero from "./Screens/Home/Hero";
import HeaderSection from "../src/Screens/Home/HeadSection";
import CreateBeautifulDesig from "../src/Screens/Home/CreateBeautifulDesig";
import Benefits from "../src/Screens/Home/Benefits";
import Engaging from "../src/Screens/Home/Engaging";
import CreateProfile from "../src/Screens/Home/CreateProfile";
import Footer from "./Screens/Home/Footer";
import Registration from "./Screens/Registration";
import MainL from "./Screens/ViewProfile/MainLayout";
import MainLayout from "./Screens/ViewProfile/MainLayout";

function App() {
  return (
    <>
     {/*  <Hero />
      <CreateBeautifulDesig />
      <Benefits />
      <Engaging />
      <CreateProfile />
      <Footer /> 
      <Registration />  */}


      <MainLayout />
    </>
  );
}

export default App;

import "./App.css";
import Utilization from "../src/Components/Utilization/en.json";
import Navbar from "./Screens/Home/Navbar";
import Hero from "./Screens/Home/Hero";
import HeaderSection from "../src/Screens/Home/HeadSection";
import CreateBeautifulDesig from "../../profile/src/Screens/Home/CreateBeautifulDesig";
import Benefits from "../src/Screens/Home/Benefits";
import Engaging from "../src/Screens/Home/Engaging";
import CreateProfile from "../src/Screens/Home/CreateProfile";
import Footer from "./Screens/Home/Footer";
import Registration from "./Screens/Registration";

function App() {
  return (
    <>
      <Hero />
      <CreateBeautifulDesig />
      <Benefits />
      <Engaging />
      <CreateProfile />
      <Footer />
      {/* <Registration /> */}
    </>
  );
}

export default App;

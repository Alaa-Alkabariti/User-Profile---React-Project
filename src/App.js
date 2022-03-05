import "./App.css";
import Names from "../src/Components/Names/en.json";
import Navbar from "./Screens/Home/Navbar";
import HeaderSection from "../src/Screens/Home/HeadSection";

import Registration from "./Screens/Registration";
import MainL from "./Screens/ViewProfile/MainLayout";
import MainLayout from "./Screens/ViewProfile/MainLayout";
import Home from "./Screens/Home";

function App() {
  return (
    <>
      {/* <Home />
      <Registration />  */}


      <MainLayout title='about' />
    </>
  );
}

export default App;

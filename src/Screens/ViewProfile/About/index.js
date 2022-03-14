import Names from "../../../Components/Names/en.json";
import styled from "styled-components";
import { LeftSection, Image } from "../MainLayout/index.style.js";
import AboutDetails from "../AboutDetails";
import { RightSection } from "../MainLayout/index.style";
import InternalNav from "../InternalNav";
import MainLayout from "../MainLayout/index"
import { Aboutus } from "./index.style";

function About(props) {
  return (
    <>
      <Aboutus>
        {/* <RightSection> */}
         {/*  <InternalNav /> */}
        <MainLayout title="Ahl"  />
        
          <AboutDetails  title="About" />
        {/* </RightSection> */}
      </Aboutus>
    </>
  );
}

export default About;

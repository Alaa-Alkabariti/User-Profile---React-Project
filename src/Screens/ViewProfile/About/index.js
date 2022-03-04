import Names from "../../../Components/Names/en.json";
import styled from "styled-components";
import { LeftSection, Image } from "../MainLayout/index.style.js";
import personalPhoto from "../../../Images/personalPhoto.png";
import AboutDetails from "../AboutDetails";
import { RightSection } from "../MainLayout/index.style";
import InternalNav from "../InternalNav";

import { Aboutus } from "./index.style";

function About() {
  return (
    <>
      <Aboutus>
        {/* <RightSection> */}
         {/*  <InternalNav /> */}
          <AboutDetails  title="About" />
        {/* </RightSection> */}
      </Aboutus>
    </>
  );
}

export default About;

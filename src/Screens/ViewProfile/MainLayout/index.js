import Names from "../../../Components/Names/en.json";
import styled from "styled-components";
import {
  LeftSection,
  Image,
  Nav,
  RightSection,
  Layout,
} from "../MainLayout/index.style.js";
import personalPhoto from "../../../Images/personalPhoto.png";
import About from "../About";

function MainLayout({ cildren, props }) {
  return (
    <>
      <Layout>
        <RightSection>
          <Nav>ff</Nav>
          {cildren}
        </RightSection>
        <LeftSection color="blue">
          {/* <Image src={card1} /> */}
          <img src={personalPhoto} />
        </LeftSection>
      </Layout>
    </>
  );
}

export default MainLayout;

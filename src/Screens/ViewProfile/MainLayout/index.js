import Names from "../../../Components/Names/en.json";
import styled from "styled-components";
import {
  LeftSection,
  Image,
  RightSection,
  Layout,
} from "../MainLayout/index.style.js";
import personalPhoto from "../../../Images/personalPhoto.png";
import About from "../About";
import InternalNav from '../InternalNav/index'

function MainLayout({ cildren, props }) {
  return (
    <>
      <Layout>
        <LeftSection color="blue">
          {/* <Image src={card1} /> */}
          <Image IMG={personalPhoto} />
        </LeftSection>
        <RightSection>
          <InternalNav />
          {cildren}
        </RightSection>
      </Layout>
    </>
  );
}

export default MainLayout;

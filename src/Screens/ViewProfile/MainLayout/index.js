import Names from "../../../Components/Names/en.json";
import styled from "styled-components";
import { VscColorMode } from "react-icons/vsc";

import {
  LeftSection,
  Image,
  RightSection,
  Layout,
  Title,
  OverLay,
  Theme,
  Arrow,
  Icons,
  Icon
} from "../MainLayout/index.style.js";
import personalPhoto from "../../../Images/personalPhoto.png";
import About from "../About";
import InternalNav from "../InternalNav/index";

function MainLayout({ children }, props) {
  return (
    <>
      <Layout>
        <LeftSection color="blue">
          {/* <Image src={card1} /> */}
          <Image IMG={personalPhoto} />
          <OverLay></OverLay>

          <Title>{props.title}</Title>
        </LeftSection>

        <RightSection>
          <InternalNav />
          {children}
        </RightSection>
        
          <Icons>
          <Arrow>
            <Icon>&#8249;</Icon>
            <Icon>&#8250;</Icon>
          </Arrow>
          <Theme>
          <VscColorMode />
        </Theme>
          </Icons>
      </Layout>
    </>
  );
}

export default MainLayout;

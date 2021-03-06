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
  Icon,
  LeftSpace,
} from "./index.style";
import InternalNav from "./InternalNav";

function MainLayout(props) {
  return (
    <>
      <Layout>
        <LeftSpace>
          <LeftSection color="blue">
            <Image
              src={props.image ? props.image : "Images/personalPhoto.png"}
            />
            <OverLay />
            <Title id="title">{props.title}</Title>
          </LeftSection>
        </LeftSpace>

        <RightSection>
          <InternalNav clk="1" />
          {props.children}
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

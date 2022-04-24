import { Link } from "react-router-dom";
import { Nav } from "../index.style";
import { ListItem, List } from "../InternalNav/index.style";

function InternalNav() {
  return (
    <>
      <Nav>
        <List>
          <ListItem to="/">about</ListItem>
          <ListItem to="/skills">skills</ListItem>
          <ListItem to="/services">services</ListItem>
          <ListItem to="/gallery">gallery</ListItem>
        </List>
      </Nav>
    </>
  );
}

export default InternalNav;

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

{
  /* <ListItem
            borderBottom="3px solid #46079A"
            fontWeight="bold"
            onClick={() => setHandleClicked("0")}
          >
            About Me
          </ListItem>
          <ListItem onClick={() => setHandleClicked("1")}>Skills</ListItem>
          >
          <ListItem onClick={() => setHandleClicked("3")}>Gallery</ListItem> */
}

// import { Nav } from "../MainLayout/index.style";
// import { ListItem, List } from "../InternalNav/index.style";
// import { useState } from "react";
// import AboutDetails from "../AboutDetails/index";
// import Skills from "../Skills/index";
// import Services from "../Services";
// import Gallery from "../Gallery";
// import About from "../About/index";
// import MainLayout from "../MainLayout/index";

// function InternalNav() {
//   let [clk, setHandleClicked] = useState("0");
//   let clicked;
//   if (clk === "0") {
//     clicked = (
//       <>
//         <List>
//           <ListItem
//             borderBottom="3px solid #46079A"
//             fontWeight="bold"
//             onClick={() => setHandleClicked("0")}
//           >
//             About Me
//           </ListItem>
//           <ListItem onClick={() => setHandleClicked("1")}>Skills</ListItem>
//           <ListItem onClick={() => setHandleClicked("2")}>Services</ListItem>
//           <ListItem onClick={() => setHandleClicked("3")}>Gallery</ListItem>
//         </List>
//         <AboutDetails />
//       </>
//     );
//   } else if (clk === "1") {
//     clicked = (
//       <>
//         <List>
//           <ListItem onClick={() => setHandleClicked("0")}>About Me</ListItem>
//           <ListItem
//             borderBottom="3px solid #46079A"
//             fontWeight="bold"
//             onClick={() => setHandleClicked("1")}
//           >
//             Skills
//           </ListItem>
//           <ListItem onClick={() => setHandleClicked("2")}>Services</ListItem>
//           <ListItem onClick={() => setHandleClicked("3")}>Gallery</ListItem>
//         </List>
//         {console.log("alaa")}
//         <Skills />
//       </>
//     );
//   } else if (clk === "2") {
//     clicked = (
//       <>
//         <List>
//           <ListItem onClick={() => setHandleClicked("0")}>About Me</ListItem>
//           <ListItem onClick={() => setHandleClicked("1")}>Skills</ListItem>
//           <ListItem
//             borderBottom="3px solid #46079A"
//             fontWeight="bold"
//             onClick={() => setHandleClicked("2")}
//           >
//             Services
//           </ListItem>
//           <ListItem onClick={() => setHandleClicked("3")}>Gallery</ListItem>
//         </List>
//         <Services />
//       </>
//     );
//   } else {
//     clicked = (
//       <>
//         <List>
//           <ListItem onClick={() => setHandleClicked("0")}>About Me</ListItem>
//           <ListItem onClick={() => setHandleClicked("1")}>Skills</ListItem>
//           <ListItem onClick={() => setHandleClicked("2")}>Services</ListItem>
//           <ListItem
//             borderBottom="3px solid #46079A"
//             fontWeight="bold"
//             onClick={() => setHandleClicked("3")}
//           >
//             Gallery
//           </ListItem>
//         </List>
//         <Gallery />
//       </>
//     );
//   }

//   return (
//     <>
//       <Nav>{clicked}</Nav>
//     </>
//   );
// }

// export default InternalNav;

import React from "react";
import ManageAbout from "../AdminScreens/ManageAbout";
import { Routes, Route, Link } from "react-router-dom";
import ManagaeSkills from "../AdminScreens/ManagaeSkills";
import ManageGallery from "../AdminScreens/GalleryManage";
import ManageServices from "../AdminScreens/ManageServices";
import { List, ListItem } from "../../Layout/InternalNav/index.style";

function NewAdmin() {
  return (
    <>
      {/* <AdminMainLayout /> */}
      {/*  <ManageAbout /> */}
      {/* <ManageSkills /> */}
      {/* <ManageServices />  */}
      {/*   <ManageGallery /> */}
      <List>
        <ListItem to="/ManageAbout">ManageAbout</ListItem>
        <ListItem to="/ManagaeSkills">ManagaeSkills</ListItem>
        <ListItem to="/ManageServices">ManageServices</ListItem>
        <ListItem to="/ManageGallery">ManageGallery</ListItem>
      </List>
      <Routes>
        <Route exact path="ManageAbout" element={<ManageAbout />} />
        <Route exact path="ManagaeSkills" element={<ManagaeSkills />} />
        <Route exact path="ManageServices" element={<ManageServices />} />
        <Route exact path="ManageGallery" element={<ManageGallery />} />
      </Routes>
    </>
  );
}

export default NewAdmin;

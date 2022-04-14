import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Button, ColumnFour, ColumnOne, ColumnThree, ColumnTwo } from "../ManageAbout/index.style";
import { Form, Input , MainImage , ImageOne, ImageTwo , ImageThree ,Header } from "./index.style";

function ManageGallery() {
  const [initialGallerytItems, setInitialGalleryItems] = useState([]);
  const [GalleryItem, setGalleryItem] = useState({
    id: 0,
    MainImage: "",
    OverLayOne: "",
    OverLayTwo: "",
    OverLayThree: "",
  });

  function handleChange(event) {
    console.log("input name", event.target.name);
    setGalleryItem({
      ...GalleryItem,
      [event.target.name]: event.target.value.trim(),
    });
  }

  function handleSubmit(event) {
    console.log("submit Form");
    setInitialGalleryItems([...initialGallerytItems, GalleryItem]);
  }
  return (
    <MainLayout>
      <Form>
        <Input
          type="text"
          onChange={handleChange}
          name="MainImage"
          placeholder="MainImage"
          value={GalleryItem.MainImage}
        />
        <Input
          type="text"
          onChange={handleChange}
          name="OverLayOne"
          value={GalleryItem.OverLayOne}
          placeholder="OverLayOne"
        />
        <Input
          onChange={handleChange}
          type="text"
          name="OverLayTwo"
          value={GalleryItem.OverLayTwo}
          placeholder="OverLayTwo"
        />
        <Input
          onChange={handleChange}
          name="OverLayThree"
          type="text"
          value={GalleryItem.OverLayThree}
          placeholder="OverLayThree"
        />
        <Button onClick={handleSubmit}>
          Save
        </Button>
      </Form>
      <Header>
        <ColumnOne>MainImage</ColumnOne>
        <ColumnTwo>OverLayOne</ColumnTwo>
        <ColumnThree>OverLayTwo</ColumnThree>
        <ColumnFour>OverLayThree</ColumnFour>  
      </Header>
      {initialGallerytItems.map((el) => (
       <Header>
       <MainImage>{el.MainImage}</MainImage>
       <ImageOne>{el.OverLayOne}</ImageOne>
       <ImageTwo>{el.OverLayTwo}</ImageTwo>
       <ImageThree>{el.OverLayThree}</ImageThree>
     </Header>
      ))}
    </MainLayout>
  );
}

export default ManageGallery;

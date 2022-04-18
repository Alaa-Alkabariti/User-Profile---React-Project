import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Img } from "../ManagaeSkills/index.style";
import { Button, Delete, Table, Td, Th, Tr } from "../ManageAbout/index.style";
import { Form, Input, Header } from "./index.style";
import { FcAddImage } from "react-icons/fc";

function ManageGallery() {
  const [initialGallerytItems, setInitialGalleryItems] = useState([]);
  const [GalleryItem, setGalleryItem] = useState({
    id: 0,
    MainImage: "",
    OverLayOne: "",
    OverLayTwo: "",
    OverLayThree: "",
  });

  let icon = <FcAddImage />;

  const [ImageIconState, setImageIcon] = useState(
    <FcAddImage name="phone" size={10} color="#FFF" />
  );

  function handleChange(event) {
    console.log("input name", event.target.name);
    setGalleryItem({
      ...GalleryItem,
      [event.target.name]: event.target.value.trim(),
    });
  }

  function handleSubmit(event) {
    console.log("submit Form");
    let currentId = initialGallerytItems.length;
    setInitialGalleryItems([
      ...initialGallerytItems,
      {
        id: currentId,
        MainImage: GalleryItem.MainImage,
        OverLayOne: GalleryItem.OverLayOne,
        OverLayTwo: GalleryItem.OverLayTwo,
        OverLayThree: GalleryItem.OverLayThree,
      },
    ]);
  }

  function deleteItem(el) {
    setInitialGalleryItems(
      initialGallerytItems.filter((items) => items.id !== el.id)
    );
  }

  return (
    <MainLayout>
      <Form>
        <Input
          type="text"
          onChange={handleChange}
          name="MainImage"
          placeholder={<FcAddImage />}
          value={GalleryItem.MainImage}
        />

        <Input
          type="text"
          onChange={handleChange}
          name="OverLayOne"
          value={GalleryItem.OverLayOne}
          placeholder={ImageIconState}
        />
        <Input
          onChange={handleChange}
          type="text"
          name="OverLayTwo"
          value={GalleryItem.OverLayTwo}
          placeholder={icon}
        />
        <Input
          onChange={handleChange}
          name="OverLayThree"
          type="text"
          value={GalleryItem.OverLayThree}
          placeholder="OverLayThree"
        />
        <Button onClick={handleSubmit}>Save</Button>
      </Form>
      <Header>
        <Table>
          <thead>
            <Tr>
              <Th>#</Th>
              <Th>MainImage</Th>
              <Th>OverLayOne</Th>
              <Th>OverLayTwo</Th>
              <Th>OverLayThrees</Th>
              <Th>Action</Th>
            </Tr>
          </thead>
          <tbody>
            {initialGallerytItems.map((el) => (
              <Tr key={el.id}>
                <Td>{el.id + 1}</Td>
                <Td>
                  <Img src={el.MainImage} alt="MainImage" />
                </Td>
                <Td>
                  <Img src={el.OverLayOne} alt="MainImage" />
                </Td>
                <Td>
                  <Img src={el.OverLayTwo} alt="MainImage" />
                </Td>
                <Td>
                  <Img src={el.OverLayThree} alt="MainImage" />
                </Td>
                <Td>
                  <Delete onClick={() => deleteItem(el)}>Delete</Delete>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Header>
    </MainLayout>
  );
}

export default ManageGallery;

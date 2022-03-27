import React from "react";
import Layout from "../../Layout";
import { useState } from "react";
import {
  GallerySec,
  GalleryItem,
  MainImage,
  OverLay,
  Image,
} from "./index.style";
import GalleryComponent from "./GalleryComponent";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

function Gallery() {
  const [images, setImages] = useState([
    {
      galleryImages: [
        { id: "0", path: "Images/gallery.png" },
        { id: "1", path: "Images/gallery1.png" },
        { id: "2", path: "Images/gallery2.png" },
        { id: "3", path: "Images/gallery3.png" },
      ],
      discription: "dfjaklfjaklfa",
      title: "title",
    },
    {
      galleryImages: [
        { id: "0", path: "Images/gallery3.png" },
        { id: "1", path: "Images/gallery1.png" },
        { id: "2", path: "Images/gallery2.png" },
        { id: "3", path: "Images/gallery3.png" },
      ],
      discription: "dfjaklfjaklfa",
      title: "title",
    },

  ]);

 
  // const handleImageClick = (value) => {
  //   console.log("hi", value);
  //   setCuttentImage(value);

  //   // e.target.setAttribute("src", "Images/gallery3.png");
  //   // e.target.setAttribute("alt", "image");
  // };

  return (
    <>
      <Layout title="Gallery" image="Images/galleryImg.png">
        <GallerySec>
            {images.map((box) => (
              <GalleryComponent box={box} />
            ))}
        </GallerySec>
      </Layout>
    </>
  );
}

export default Gallery;

/* 
<Layout title="Gallery" image="Images/galleryImg.png">
<GallerySec>
  {images.map((el) =>
      <GalleryItem>
    {el.galleryImages.map((items, index) => (
      <>
        <MainImage src={currentImage}></MainImage>
        <OverLay>
          <Image
            onClick={() => handleImageClick(el.galleryImages[0].path)}
            src={el.galleryImages[0].path}
          ></Image>
          <Image
            onClick={() => handleImageClick(el.galleryImages[1].path)}
            src={el.galleryImages[1].path}
          ></Image>
          <Image
            onClick={() => handleImageClick(el.galleryImages[2].path)}
            src={el.galleryImages[2].path}
          ></Image>
          <Image
            onClick={() => handleImageClick(el.galleryImages[3].path)}
            src={el.galleryImages[3].path}
          ></Image>
        </OverLay>
      </>

    ))}
    </GalleryItem>
  )}
</GallerySec>
</Layout> */

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

function Gallery() {
  const [images, setImages] = useState([
    {
      id: "0",
      mainImage: "Images/gallery.png",
      id: "1",
      imageOne: "Images/gallery1.png",
      id: "2",
      imageTwo: "Images/gallery2.png",
      id: "3",
      imageThree: "Images/gallery3.png",
      id: "4",
      imageFour: "Images/gallery.png",
    },
    {
      id: "0",
      mainImage: "Images/gallery1.png",
      id: "1",
      imageOne: "Images/gallery1.png",
      id: "2",
      imageTwo: "Images/gallery2.png",
      id: "3",
      imageThree: "Images/gallery3.png",
      id: "4",
      imageFour: "Images/gallery.png",
    },
  ]);

   function handleImageClick(e) {
    e.target.setAttribute("src", "Images/gallery3.png");
    e.target.setAttribute("alt", "image");
  } 
/* 
  function handleImageClick(e) {
   <>
    {images.map((el) => (
      <GalleryItem key={el.id}>
        <MainImage src={el.mainImage}></MainImage>
        <OverLay>
          <Image onClick={handleImageClick} src={el.imageOne}></Image>
          <Image src={el.imageTwo}></Image>
          <Image src={el.imageThree}></Image>
          <Image src={el.imageFour}></Image>
        </OverLay>
      </GalleryItem>
    ))}</>
  }; */

  return (
    <>
      <Layout title="Gallery" image="Images/galleryImg.png">
        <GallerySec>
          {images.map((el) => (
            <GalleryItem key={el.id}>
              <MainImage src={el.mainImage}></MainImage>
              <OverLay>
                <Image onClick={handleImageClick} src={el.imageOne}></Image>
                <Image src={el.imageTwo}></Image>
                <Image src={el.imageThree}></Image>
                <Image src={el.imageFour}></Image>
              </OverLay>
            </GalleryItem>
          ))}
        </GallerySec>
      </Layout>
    </>
  );
}

export default Gallery;

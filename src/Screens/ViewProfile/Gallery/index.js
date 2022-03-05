import React from "react";
import { Section, GalleryItem } from "./index.style";
import galleryOne from '../../../Images/gallery.png'
import { OverLay ,Image } from "../MainLayout/index.style";

function Gallery() {
  return (
    <>
   {/*  <Image IMG={galleryOne} /> */}

<Section>
  <GalleryItem src={galleryOne}></GalleryItem>
  <GalleryItem src={galleryOne}></GalleryItem>
  <GalleryItem src={galleryOne}></GalleryItem>
  <GalleryItem src={galleryOne}></GalleryItem>
</Section></>
  );
}

export default Gallery;

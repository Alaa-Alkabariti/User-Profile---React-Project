import React from "react";
import { Section, GalleryItem } from "./index.style";
import { OverLay, Image } from "../MainLayout/index.style";

function Gallery() {
  return (
    <>
      <Section>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
      </Section>
    </>
  );
}

export default Gallery;

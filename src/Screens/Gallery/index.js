import React from "react";
import Layout from "../../Layout";
import { Section, GalleryItem, OverLay } from "./index.style";

function Gallery() {
  return (
    <>
      <Layout title="Gallery" image="Images/galleryImg.png">
        <Section>
          <GalleryItem src="/Images/gallery.png"></GalleryItem>
         {/*  <OverLay>
            <img src="/Images/gallery.png" />
            <p>this is alaa</p>
          </OverLay> */}

          <GalleryItem src="/Images/gallery.png"></GalleryItem>
          <GalleryItem src="/Images/gallery.png"></GalleryItem>
          <GalleryItem src="/Images/gallery.png"></GalleryItem>
        </Section>
      </Layout>
    </>
  );
}

export default Gallery;

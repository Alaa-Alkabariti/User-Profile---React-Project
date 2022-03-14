import React from "react";
import Layout from "../../Layout";
import { Section, GalleryItem } from "./index.style";

function Gallery() {
  return (
    <>
      <Layout title="Gallery">
      <Section>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
        <GalleryItem src="/Images/gallery.png"></GalleryItem>
      </Section>
      </Layout>
    </>
  );
}

export default Gallery;

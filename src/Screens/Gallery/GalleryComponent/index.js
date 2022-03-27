import React, { useState } from "react";
import { GalleryItem, Image, MainImage, OverLay } from "../index.style";

const GalleryComponent = ({box}) => {

  const [currentImage, setCuttentImage] = useState(
    box.galleryImages[0].path
  );


  return (
    <GalleryItem>
      <MainImage src={currentImage}></MainImage>
      <OverLay>
        {box.galleryImages.map((item) => (
          <Image src={item.path} onClick={() => setCuttentImage(item.path) } />
        ))}
      </OverLay>
    </GalleryItem>
  );
};

export default GalleryComponent;

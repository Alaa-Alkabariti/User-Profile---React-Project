import React, { useState } from "react";
import { MainImage, OverLay , Image } from "../GalleryItem/index.style";
import { GalleryItem } from "../index.style";

function GalleryItems(props) {
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
    
      const [currentImage, setCuttentImage] = useState(
        images[0].galleryImages[0].path
      );
      const handleImageClick = (value) => {  //value is the clicked image path
        console.log("hi", value);
        setCuttentImage(value);
      };
  return (
    <>
      <GalleryItem>
        <MainImage src={props.currentImage}></MainImage>
        <OverLay>
          <Image src={props.source1}></Image>
          <Image src={props.source2}></Image>
          <Image src={props.source3}></Image>
        </OverLay>
      </GalleryItem>
    </>
  );
}

export default GalleryItems;

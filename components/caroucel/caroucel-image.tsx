"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface IImage {
  original: string;
  thumbnail: string;
}

export const CaroucelImage = ({ images }: { images: IImage[] }) => {
  return (
    <ImageGallery
      items={images}
      lazyLoad
      showBullets={false}
      showPlayButton={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showIndex
    />
  );
};

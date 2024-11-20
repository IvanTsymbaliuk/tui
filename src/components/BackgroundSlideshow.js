import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];

const preloadImages = (imageArray) => {
  imageArray.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
};

export default function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Box
        sx={{
          zIndex: "2",
          position: "fixed",
          top: "0",
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
        }}
      ></Box>
      <Box
        sx={{
          zIndex: "1",
          position: "fixed",
          top: "0",
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 9s ease",
        }}
      ></Box>
    </>
  );
}

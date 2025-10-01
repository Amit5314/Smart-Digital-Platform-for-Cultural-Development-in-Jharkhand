import React, { useState, useEffect } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import "C:\\Users\\Reetu Rai\\Desktop\\SIH\\frontend\\src\\components\\Styling\\home.css"; // CSS for transitions

const images = [img1, img2, img3];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Slideshow;

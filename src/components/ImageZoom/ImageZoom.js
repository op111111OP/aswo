"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImageZoom.module.css"; // Стилі можна додати за потреби

const ImageZoom = ({ src, zoomFactor = 2 }) => {
  const [isZoomed, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setZoom(true);
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const handleMouseMove = (e) => {
    updatePosition(e);
  };

  const updatePosition = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className={`${styles.image_zoom_container} ${
        isZoomed ? styles.zoomed : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.image_container}>
        <img
          src={src}
          alt="s"
          className={styles.image_container_img}
          id="fff"
        />
      </div>
      {isZoomed && (
        <div
          className={styles.zoomed_image}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: `${zoomFactor * 100}% ${zoomFactor * 100}%`,
          }}
        ></div>
      )}
    </div>
  );
};

ImageZoom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  zoomFactor: PropTypes.number,
};

export default ImageZoom;

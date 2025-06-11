import { useRef } from "react";

const RotatingImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  let animationFrameId = null;
  let rotation = 0;

  const rotateImage = () => {
    if (imgRef.current) {
      rotation = (rotation + 1) % 360;
      imgRef.current.style.transform = `rotate(${rotation}deg)`;
      animationFrameId = requestAnimationFrame(rotateImage);
    }
  };

  const handleMouseEnter = () => {
    if (!animationFrameId) {
      rotateImage();
    }
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-100 ease-linear"
    //   style={{ width: 200, height: 200 }} 
    />
  );
};

export default RotatingImage;

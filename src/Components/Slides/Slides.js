import { useCallback, useEffect, useState } from "react";
import './styleSlides.css';

function Slides({images}) {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval)
  }, [nextSlide])

  return (
    <div className="SlidesMainContainer">

      <div className="SlidesContainer">
        {images.map((image, index) => (
          <img
            key={index}
            className={`SlideImage ${index === slide ? 'active' : ''}`}
            src={image}
            alt={`slide-${index}`}
          />
        ))}
        
        <div className="SlideLineCont">
          {images.map((_, index) => (
            <div
              key={index}
              className={`SlideLine ${index === slide ? "active" : ""}`}
            ></div>
          ))}
        </div>

      </div>
    </div>
    
  )
}

export default Slides;
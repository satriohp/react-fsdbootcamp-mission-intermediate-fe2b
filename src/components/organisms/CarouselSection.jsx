import { useState, useRef, useEffect } from "react";
import PosterItem from "../molecules/PosterItem";

export default function CarouselSection({ title, items, leftArrowSrc, rightArrowSrc }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2); 
      } else if (width < 768) {
        setItemsPerView(3); 
      } else if (width < 1024) {
        setItemsPerView(4); 
      } else if (width < 1280) {
        setItemsPerView(5); 
      } else {
        setItemsPerView(6); 
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const infiniteItems = [...items, ...items, ...items];
  const totalItems = infiniteItems.length;

  const scrollLeft = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return items.length * 2 - 1;
      }
      return newIndex;
    });
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= items.length * 2) {
        return items.length;
      }
      return newIndex;
    });
  };

  const getTransformValue = () => {
    const itemWidth = 100 / itemsPerView;
    return -(currentIndex * itemWidth);
  };

  return (
    <section className="my-10 sm:my-12 px-4 sm:px-6 lg:px-8"> 
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-1.5 sm:p-2 rounded-full z-10 transition-all duration-200 flex items-center justify-center"
          aria-label="Scroll left"
        >
          <img src={leftArrowSrc} alt="Arrow Left" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="overflow-hidden" ref={carouselRef}>
          <div 
            className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(${getTransformValue()}%)`,
            }}
          >
            {infiniteItems.map((item, index) => (
              <PosterItem
                key={`${item.id}-${index}`}
                src={item.src}
                title={item.title}
                year={item.year}
                itemsPerView={itemsPerView}
              />
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-1.5 sm:p-2 rounded-full z-10 transition-all duration-200 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <img src={rightArrowSrc} alt="Arrow Right" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}
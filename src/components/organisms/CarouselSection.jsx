import { useState } from "react";
import PosterItem from "../molecules/PosterItem";

export default function CarouselSection({ title, items, leftArrowSrc, rightArrowSrc }) {
  const [scroll, setScroll] = useState(0);

  const scrollLeft = () => {
    setScroll(scroll > 0 ? scroll - 1 : 0);
  };

  const scrollRight = () => {
    setScroll(scroll < items.length - 1 ? scroll + 1 : items.length - 1);
  };

  return (
    <section className="my-10 sm:my-12 px-4 sm:px-6"> 
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
      </div>

      <div className="relative mt-4">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full z-10"
        >
          <img src={leftArrowSrc} alt="Arrow Left" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <div className="flex gap-3 sm:gap-4 py-4 overflow-x-hidden scroll-snap-x scroll-smooth -mx-4 sm:-mx-6 px-4 sm:px-6"> 
          {items?.map((item) => (
            <PosterItem
              key={item.id}
              src={item.src}
              title={item.title}
              year={item.year}
              style={{ transform: `translateX(-${scroll * 100}%)` }}
              className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6"
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full z-10"
        >
          <img src={rightArrowSrc} alt="Arrow Right" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
}
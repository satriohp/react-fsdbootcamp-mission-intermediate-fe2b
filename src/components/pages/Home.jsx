import MainLayout from "../templates/MainLayout";
import Hero from "../organisms/Hero";
import ContinueWatchCarousel from "../organisms/ContinueWatchCarousel";
import CarouselSection from "../organisms/CarouselSection";
import movies from "../../data/movies";  

import leftArrow from "/assets/frame72.png";  
import rightArrow from "/assets/frame71.png";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <ContinueWatchCarousel
        title="Melanjutkan Tonton"
        items={movies.continue}
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />

      <CarouselSection
        title="Top Rating Hari Ini"
        items={movies.toprated}
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
      <CarouselSection
        title="Film Trending"
        items={movies.trending}
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
      <CarouselSection
        title="Rilis Baru"
        items={movies.newrelease}
        leftArrowSrc={leftArrow}  
        rightArrowSrc={rightArrow} 
      />
    </MainLayout>
  );
};

// Nextjs tools
import Image, { StaticImageData } from "next/image";

// React hooks
import React, { useState, useEffect, useCallback } from "react";

// Buttons
import { DotButton } from "../Carousel/CarouselButtons";

// Embla Carousel
import useEmblaCarousel from "embla-carousel-react";

// Styles
import styles from "./styles/carousel.module.scss";

interface CarouselWithButtonsProps {
  slides: any[];
  nomeunidade?: boolean;
  modalidades?: string;
}

const CarouselWithDots = ({
  slides,
  nomeunidade,
}: CarouselWithButtonsProps) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((slide: any, index: React.Key) => (
              <div className={styles.embla__slide} key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselWithDots;

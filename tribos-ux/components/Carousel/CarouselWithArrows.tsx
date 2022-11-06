// React
import React, { useState, useEffect, useCallback } from "react";

// Buttons
import { PrevButton, NextButton } from "./CarouselButtons";

// EmblaCarouselComponent
import useEmblaCarousel from "embla-carousel-react";

// Styles
import styles from "./styles/carousel.module.scss";

const CarouselWithArrows = ({ slides }) => {
  const [emblaIsActive, setEmblaIsActive] = useState(false);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [viewportRef, embla] = useEmblaCarousel({
    align: selectedIndex ? "center" : "start", // You might not want to do this
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );
  const updatePrevNextButtonState = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", updatePrevNextButtonState); // Set button states when the selected snap changes
    updatePrevNextButtonState(); // Set button states when the carousel mounts
  }, [embla, updatePrevNextButtonState]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map(
              (
                cards:
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal,
                index: React.Key | null | undefined
              ) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={styles.embla__slide__inner}>{cards}</div>
                </div>
              )
            )}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};

export default CarouselWithArrows;

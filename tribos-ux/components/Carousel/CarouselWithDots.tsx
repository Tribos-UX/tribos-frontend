// React hooks
import React, { useCallback, useEffect, useState } from 'react'

// Buttons
import { DotButton } from './CarouselButtons'

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from "./styles/carousel.module.scss"

interface CarouselWithButtonsProps {
  slides: React.ReactNode[]
}

const CarouselWithDots = ({ slides }: CarouselWithButtonsProps) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: true,
  slidesToScroll: 3,
  loop: false,
  containScroll: "trimSnaps",  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((slide: any, index: React.Key) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                {slide}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.embla__dot}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default CarouselWithDots
